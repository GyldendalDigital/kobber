import type { ImageLoaderProps } from "next/image"

export const damImageUrl = (assetId: string, mimeType: MIMEType = "image/png") =>
  [assetId, mimeType].join("|")

/**
 * @param src - should include the dam asset id and mime type, in this format: `assetId/mimeType`
 *
 * Previews/renditions are not originals. They are adjusted in some way. Scale down, lower quality, crop etc.
 *
 * @see {@link https://helpcenter.woodwing.com/hc/en-us/articles/115002690026-Elvis-6-API-Previews | DAM preview docs}.
 */
export default function damImageLoader({ src, width, quality }: ImageLoaderProps) {
  const [assetId, mimeType] = src.split("|")

  if (!assetId) {
    return src
  }

  const fileExtension = getFileExtension(mimeType)

  /**
   * Preview endpoint doesn't support SVGs.
   *
   * @example /file/7_mx4J2pq2fAdkyjVYSqee (last part is optional)
   */
  if (fileExtension === ".svg") {
    return `${damBaseUrl}/file/${assetId}/*/${assetId}${fileExtension}`
  }

  const attributes = `maxWidth_${width}${quality ? `_quality_${quality}` : ""}`

  /**
   * @example /preview/AYCEfOgwKGqBCCmqkKjQSa/previews/maxWidth_600_maxHeight_600.png
   */
  return `
  ${damBaseUrl}/preview/${assetId}/previews/${attributes}${fileExtension}
  `
}

const damBaseUrl = "https://dam-prod.gyldendaldigital.no/tenants/edu"

type MIMEType =
  | "image/jpeg"
  | "image/png"
  | "image/gif"
  | "image/svg+xml"
  | "video/mp4"
  | "video/webm"
  | "video/webp"

export const getFileExtension = (mimeType: MIMEType | string | undefined) => {
  switch (mimeType) {
    case "image/jpeg":
      return ".jpg"
    case "image/png":
      return ".png"
    case "image/gif":
      return ".gif"
    case "image/svg+xml":
      return ".svg"
    case "video/mp4":
      return ".mp4"
    case "video/webm":
      return ".webm"
    case "video/webp":
      return ".webp"
    default:
      return ""
  }
}
