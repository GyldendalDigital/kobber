const DAM_BASE_URL = "https://dam-prod.gyldendaldigital.no/tenants/edu"
export const DAM_SEARCH_URL = `${DAM_BASE_URL}/services/search`
const DAM_SEARCH_STATIC_QUERY_PARAMS = 'assetDomain: (image) AND ancestorPaths: "/Kobber"'

export interface DamAsset {
  assetId: string
  name: string
  extension: string
  previewUrl: string
}

export type DamAssetResponse = {
  errorcode?: number
  totalHits: number
  hits: {
    id: string
    metadata: {
      name: string
      assetType: string | "jpg" | "png" | "svg"
    }
    previewUrl: string
  }[]
}

export function createPreviewUrl(id: string, extension: string) {
  const endpoint = extension === "svg" ? "file" : "preview"
  return `${DAM_BASE_URL}/${endpoint}/${id}/*/${id}.${extension}`
}

export function transformAssets(data: DamAssetResponse): DamAsset[] {
  return data.hits.map((asset) => ({
    assetId: asset.id,
    name: asset.metadata.name,
    extension: asset.metadata.assetType,
    previewUrl: createPreviewUrl(asset.id, asset.metadata.assetType),
  }))
}

export const buildSearchQuery = (searchQuery: string) => {
  const query = searchQuery ? `name: *${searchQuery}*` : "name: *"
  return `${DAM_SEARCH_STATIC_QUERY_PARAMS} AND ${query}`
}
