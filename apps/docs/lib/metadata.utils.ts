import { Metadata } from "next"
import { damPreviewUrl, parseDamFileUrl } from "./damImageLoader"

export interface PageMetadata extends Metadata {
  href: string
  image?: string
  status?: "kommer" | "nyhet"
  children?: PageMetadata[]
  disabled?: boolean
  /** Used in mobile navbar to prevent self redirects */
  redirectsTo?: string
}

/** OG does not support SVG */
const openGraph = (src: string | undefined) => {
  const parseResult = parseDamFileUrl(src)

  // could return src instead, but it's mainly placeholders
  if (!parseResult) {
    return {}
  }

  const { assetId, extension } = parseResult

  return {
    images: [
      {
        url: damPreviewUrl(assetId, extension === ".svg" ? ".png" : extension, 600),
      },
    ],
  }
}

/** Get page pathname based on file location
 *
 * @example
 * url: "c:/repo/kobber/apps/wiki/app/(routes)/merkevare/typografi/lyon/lyon.meta.ts"
 * out: "/merkevare/typografi/lyon"
 */
const pagePathname = (metaUrl: string) => {
  const normalizedPath = metaUrl.split("(routes)")[1]?.replace(/\\/g, "/")
  if (!normalizedPath) {
    throw new Error("Invalid metaUrl format")
  }
  return normalizedPath.substring(0, normalizedPath.lastIndexOf("/"))
}

export const pageMetadata = (
  metaUrl: string,
  metadata: Omit<PageMetadata, "href">
): PageMetadata => {
  return {
    ...metadata,
    href: pagePathname(metaUrl),
    openGraph: openGraph(metadata.image),
  }
}
