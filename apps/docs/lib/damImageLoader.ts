import type { ImageLoaderProps } from "next/image"

type FileExtension = ".jpg" | ".png" | ".gif" | ".svg" | ".mp4" | ".webm" | ".webp"

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

/**
 * Custom image loader for Next.js Image component.
 *
 * @param src - dam file url
 *
 * @returns dam preview url if applicable, otherwise the original url.
 *
 * @example
 * width: 600
 * src: https://dam-prod.gyldendaldigital.no/tenants/edu/file/123/^/123.png
 * out: https://dam-prod.gyldendaldigital.no/tenants/edu/preview/123/previews/maxWidth_600__quality_90.jpg
 *
 * Previews/renditions are not originals. They are adjusted in some way. Scale down, lower quality, crop etc.
 *
 * @see {@link https://helpcenter.woodwing.com/hc/en-us/articles/115002690026-Elvis-6-API-Previews | DAM preview docs}.
 */
export default function damImageLoader({ src, width, quality }: ImageLoaderProps) {
  const parseResult = parseDamFileUrl(src)
  if (!parseResult) {
    return src
  }

  const { assetId, extension } = parseResult

  /**
   * Preview endpoint doesn't support SVGs.
   *
   * @example /file/7_mx4J2pq2fAdkyjVYSqee (last part is optional)
   */
  if (extension === ".svg") {
    return damUrl(assetId, extension)
  }

  return damPreviewUrl(assetId, extension as FileExtension, width, quality)
}
