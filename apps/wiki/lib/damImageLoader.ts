import type { ImageLoaderProps } from "next/image"

export const damImageUrl = (assetId: string, extension: FileExtension = ".png") =>
  [assetId, extension].join("|")

/**
 * @param src - should include the dam asset id and mime type, in this format: `assetId/mimeType`
 *
 * Previews/renditions are not originals. They are adjusted in some way. Scale down, lower quality, crop etc.
 *
 * @see {@link https://helpcenter.woodwing.com/hc/en-us/articles/115002690026-Elvis-6-API-Previews | DAM preview docs}.
 */
export default function damImageLoader({ src, width, quality }: ImageLoaderProps) {
  const [assetId, extension] = src.split("|")

  if (!assetId) {
    return src
  }

  /**
   * Preview endpoint doesn't support SVGs.
   *
   * @example /file/7_mx4J2pq2fAdkyjVYSqee (last part is optional)
   */
  if (extension === ".svg") {
    return `${damBaseUrl}/file/${assetId}/*/${assetId}${extension}`
  }

  /**
   * JPGs should have a high quality parameter.
   */
  if (extension === ".jpg") {
    quality ??= 90
  }

  const attributes = `maxWidth_${width}_maxHeight_${width}${quality ? `_quality_${quality}` : ""}`

  /**
   * @example /preview/AYCEfOgwKGqBCCmqkKjQSa/previews/maxWidth_600.png
   */
  return `
  ${damBaseUrl}/preview/${assetId}/previews/${attributes}${extension}
  `
}

const damBaseUrl = "https://dam-prod.gyldendaldigital.no/tenants/edu"

type FileExtension = ".jpg" | ".png" | ".gif" | ".svg" | ".mp4" | ".webm" | ".webp"
