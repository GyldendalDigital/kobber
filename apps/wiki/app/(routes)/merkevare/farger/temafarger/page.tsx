import { ThemeColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Temafarger",
  image: placeholderImageUrl({}),
  description:
    "Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å kategorisere produkt-spesifikt innhold.",
}

export default function Temafarger() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Temafarger"
        ingress="Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å kategorisere produkt-spesifikt innhold."
      />

      {ThemeColors.map((theme, index) => (
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
