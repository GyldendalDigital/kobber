import type { ImageLoaderProps } from "next/image"
import { damPreviewUrl, damUrl, FileExtension, parseDamFileUrl } from "./utils/damUtils"

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
