import Image, { type ImageProps as NextImageProps } from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { getImageDimensions } from "@sanity/asset-utils"
import { SanityImageProps } from "./page-builder.types"

type ImageProps = {
  asset: SanityImageProps
  alt?: string
} & Omit<NextImageProps, "alt" | "src">

function getBlurDataURL(asset: SanityImageProps) {
  if (asset?.blurData) {
    return {
      blurDataURL: asset.blurData,
      placeholder: "blur" as const,
    }
  }
  return {}
}

export function SanityImage({
  asset,
  alt,
  width,
  height,
  className,
  quality = 75,
  fill,
  ...props
}: ImageProps) {
  if (!asset?.asset) return null
  const dimensions = getImageDimensions(asset.asset)

  const url = urlFor({ ...asset, _id: asset?.asset?._ref })
    .size(Number(width ?? dimensions.width), Number(height ?? dimensions.height))
    .dpr(2)
    .auto("format")
    .quality(Number(quality))
    .url()

  // Base image props
  const imageProps = {
    alt: alt ?? asset.alt ?? "Image",
    "aria-label": alt ?? asset.alt ?? "Image",
    src: url,
    className: className,
    // Optimize image sizes for performance and LCP
    // Use smaller percentages to reduce initial load size while maintaining quality
    // Order from smallest to largest breakpoint for better browser parsing
    // Define responsive image sizes for optimal loading:
    // - Mobile (<640px): Image takes up 80% of viewport width
    // - Tablet (<768px): Image takes up 50% of viewport width
    // - Small desktop (<1200px): Image takes up 33% of viewport width
    // - Large desktop (>1200px): Image takes up 25% of viewport width
    sizes: "(max-width: 640px) 75vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw",
    ...getBlurDataURL(asset),
    ...props,
  }

  // Add width and height only if fill is not true
  if (!fill) {
    return (
      <Image
        {...imageProps}
        width={width ?? dimensions.width}
        height={height ?? dimensions.height}
      />
    )
  }

  return <Image {...imageProps} fill={fill} />
}
