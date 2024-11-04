import { UIColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "UI-farger",
  image: placeholderImageUrl({}),
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
