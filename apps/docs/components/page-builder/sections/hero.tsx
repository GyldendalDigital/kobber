import type { PagebuilderType } from "../page-builder.types"

type HeroBlockProps = PagebuilderType<"hero">

export function HeroBlock({ title, buttons, badge, image, richText }: HeroBlockProps) {
  return (
    <section id="hero" className="mt-4 md:my-16">
      hero image
    </section>
  )
}
