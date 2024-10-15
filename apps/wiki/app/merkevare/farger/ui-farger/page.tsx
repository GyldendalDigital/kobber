import { Metadata } from "next"
import { UIColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const pageDetailsUi: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "UI-farger",
  image: placeholderImageUrl({}),
}

export const metadata: Metadata = {
  title: documentTitle(pageDetailsUi.title),
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
        <ContentSection textCollection={{ heading: theme.title }} key={index}>
          <ColorBlockGrid colors={theme.colors} />
        </ContentSection>
      ))}
    </SectionLayout>
  )
}
