import { ThemeColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { pagePathname } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Temafarger",
  image:
    "https://s3-alpha-sig.figma.com/img/a27a/15c7/80f11224e834566888a55956454dcd06?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IUjKcpOhPgDb8DceU7gkkcWbUxJw~QpebofYKNCqUJhMr~3t~nxqqbDREydn-3Rig88pm1QQW1bLl~rKzelJDUEcIHnpl8YbtGRIdsIRaSvQV8GnWE9BIFy-xZH6mnvq4G1JZfRgqIbrkUrUp6qC-sXxuM8N~qjFpQ-cUEmZ6TbMfqDdTp-62AHIzdPrNB-9UiTRvKFhWFoe7xyjOaznNC47dknVPmRdWf3b5Sni18N6GM01doMogNkeyY~g~FPeik1-QECtH-FTauRLLxGjZDomP5HcNxvcMUfzfGGNBP6AvUJ3VmAyFWovh6rS1jizYUX2KloPbTfFP4zmIU~mmA__",
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
          className="gap-32"
        >
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ContentSection>
      ))}
    </SectionLayout>
  )
}
