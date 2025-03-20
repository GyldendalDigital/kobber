import { cn } from "@/lib/utils"
import type { PagebuilderType } from "../page-builder.types"
import { SanityImage } from "../sanity-image"

type Props = PagebuilderType<"heroBlock">

export function HeroBlock(props: Props) {
  const { image } = props
  console.log(props)

  if (!image) {
    console.warn("Hero block is missing an image")
    return null
  }

  return (
    <div className="hero">
      <div className={cn("relative h-[30vw] max-h-80 overflow-hidden rounded-[1rem] md:h-[20vw]")}>
        <SanityImage
          asset={image}
          loading="eager"
          fill
          priority
          quality={80}
          className="max-h-96 w-full rounded-3xl object-cover"
        />
      </div>
      {/* <Image
          src={src ?? placeholderImageUrl({})}
          fill
          className="object-cover object-top"
          alt={alt}
        /> */}
    </div>
  )
}
