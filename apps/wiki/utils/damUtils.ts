export type FileExtension = ".jpg" | ".png" | ".gif" | ".svg" | ".mp4" | ".webm" | ".webp"

const damBaseUrl = "https://dam-prod.gyldendaldigital.no/tenants/edu"

/**
 * Non SVG files will be converted to preview sizes when used in Image component.
 */
export const damUrl = (assetId: string, extension: FileExtension = ".jpg") =>
  `${damBaseUrl}/file/${assetId}/*/${assetId}${extension}`

export const damPreviewUrl = (
  assetId: string,
  extension: Omit<FileExtension, ".svg">,
  width: number,
  quality?: number
) => {
  /**
   * JPGs should have a high quality parameter.
   */
  if (extension === ".jpg") {
    quality ??= 90
  }

  const attributes = `maxWidth_${width}_maxHeight_${width}${quality ? `_quality_${quality}` : ""}`

  return `${damBaseUrl}/preview/${assetId}/previews/${attributes}${extension}`
}

/**
 * Extract assetId and extension from DAM file url.
 *
 * @example
 * src: https://dam-prod.gyldendaldigital.no/tenants/edu/file/123/^/123.png
 * out: {assetId: "123", extension: ".png"}
 */
export const parseDamFileUrl = (src: string | null) => {
  if (!src?.startsWith(damBaseUrl)) {
    return false
  }

  const match = src.match(/\/file\/([\w-]+)\/\*\/\1(\.\w+)/)
  if (!match) {
    return false
  }

  const [_, assetId, extension] = match

  return { assetId, extension: extension as FileExtension }
}
