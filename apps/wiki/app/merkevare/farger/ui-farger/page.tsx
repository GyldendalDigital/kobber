import { UIColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { pagePathname } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "UI-farger",
  image:
    "https://s3-alpha-sig.figma.com/img/6955/25a8/f6b4d5b55081fedfdd213ef947f1356f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OcWOlY7irBNZjvWvxwaBX1iSzOZpLBE79WH06HnD7IbfeGEiU9LqKkU1JqltbL~poHEmA93XoHvd670jrUVDuQyIYI2HZj95zSSdFnc~Um~-T~-PBjSwfGlqoHNGp011egjj9B-YySpFggjHfV2MfVgt2RjoEFgsXrW5~-6Ave8PhONdhFZfgOy7e23UageWHsmgKRrHZdwgPoYU~UPpIM291j4mfxd0rtztIG~N3jCg1pGMuAtjLHuY5agSJm2kKp0a02T94JgCz9xlfXU5PPoKxSarXLMxro9N3Gd7rozhSfrVP4TPFFABsZZCwnhjfkVSP0DKdaNVRIUUZgxfbw__",
  description:
    "Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som skal kommunisere til sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral palett.",
}

export default function UiFarger() {
  return (
    <SectionLayout>
      <TextCollection
        heading="UI-farger"
        ingress="Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som skal kommunisere til sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral palett."
      />

      {UIColors.map((theme, index) => (
        <ContentSection
          key={index}
          textCollection={{ heading: theme.title, ingress: theme.description }}
          chilClassName="px-0"
          className="gap-y-section/gap/horizontal"
        >
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ContentSection>
      ))}
    </SectionLayout>
  )
}
