import type { PagebuilderType } from "../page-builder.types"
import { RichText } from "../rich-text"
import { SanityImage } from "../sanity-image"

type HeroBlockProps = PagebuilderType<"hero">

export function HeroBlock(props: HeroBlockProps) {
  const { title, buttons, badge, image, richText } = props
  console.log(props)
  return (
    <section id="hero" className="mt-4 md:my-16">
      {title}

      <RichText richText={richText} className="text-base font-normal md:text-lg" />

      {image && (
        <div className="h-96 w-full">
          <SanityImage
            asset={image}
            loading="eager"
            width={800}
            height={800}
            priority
            quality={80}
            className="max-h-96 w-full rounded-3xl object-cover"
          />
        </div>
      )}
    </section>
  )
}
