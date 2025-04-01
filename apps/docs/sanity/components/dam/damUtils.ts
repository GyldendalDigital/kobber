const DAM_BASE_URL = "https://dam-prod.gyldendaldigital.no/tenants/edu"
export const DAM_SEARCH_URL = `${DAM_BASE_URL}/services/search`
const DAM_SEARCH_STATIC_QUERY_PARAMS = 'assetDomain:(image) AND ancestorPaths:/Kobber'

export interface DamAsset {
  assetId: string
  name: string
  extension?: string
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

/**
 * preview docs
 * https://helpcenter.woodwing.com/hc/en-us/articles/360041901912-Assets-Server-API-Previews
 */
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

export const buildSearchQuery = (searchInput: string) => {
  if (!searchInput) {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    return `${DAM_SEARCH_STATIC_QUERY_PARAMS} AND name:${randomLetter}*`
  }

  return `${DAM_SEARCH_STATIC_QUERY_PARAMS} AND (name:*${searchInput}* OR id:${searchInput}*)`
}

/**
Error from DAM API:

(+(+(assetDomain:(image) AND ancestorPaths:\"/Kobber\" AND (name: ID: 6EDPBVy0a21830u* OR id: ID: 6EDPBVy0a21830u*)) AND (cf_readyForWeb:\"ready for web\" AND (status:ferdig OR status:test)) +((-extension:collection +(ancestorPaths:/Frikjøpt ancestorPaths:/Undervisning ancestorPaths:/Akademisk/GA Lvh ancestorPaths:/Marked/Logobase/Undervisning ancestorPaths:/Kobber ancestorPaths:/Marked/x_Hybris_import_to_be_sorted_PIM ancestorPaths:/Marked assetPath:/Frikjøpt assetPath:/Undervisning assetPath:/Akademisk/GA Lvh assetPath:/Marked/Logobase/Undervisning assetPath:/Kobber assetPath:/Marked/x_Hybris_import_to_be_sorted_PIM assetPath:/Marked)) (+extension:collection +(ancestorPaths:/Frikjøpt ancestorPaths:/Undervisning assetPath:/Frikjøpt assetPath:/Undervisning)))) -importPending:true)

 */
