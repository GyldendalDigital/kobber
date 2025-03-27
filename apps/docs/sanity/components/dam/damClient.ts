"use server"

import {
  buildSearchQuery,
  DAM_SEARCH_URL,
  DamAsset,
  DamAssetResponse,
  transformAssets,
} from "./damUtils"

export async function searchAssets(
  searchString: string,
  bearerToken: string
): Promise<{ assets: DamAsset[]; error: string | null }> {
  try {
    const searchParams = new URLSearchParams({
      q: buildSearchQuery(searchString),
      start: "0",
      size: "25",
    })

    const response = await fetch(`${DAM_SEARCH_URL}?${searchParams.toString()}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })

    if (!response.ok || response.status !== 200) {
      if (response.status === 401) {
        return { assets: [], error: "Authentication failed" }
      }
      return { assets: [], error: "Failed to fetch assets" }
    }

    const data = (await response.json()) as DamAssetResponse
    const transformedAssets = transformAssets(data)
    return { assets: transformedAssets, error: null }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch assets"
    console.error(err)
    return { assets: [], error: errorMessage }
  }
}
