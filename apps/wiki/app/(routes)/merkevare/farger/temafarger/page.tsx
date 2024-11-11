import { ThemeColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { pagePathname } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Temafarger",
  image:
    "https://dam-p-gyldendal.pqcloud.eu/authkey/46Srf1n-yb/preview/7zxDRnQoKdQ9TOZHgE5wur/previews/maxWidth_1600_maxHeight_1600.jpg/*/tema_preview.jpg?_=1",
  description:
    "Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å kategorisere produkt-spesifikt innhold.",
}

export default function Temafarger() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <h2 className="text-[48px] text-[#691837]">{metadata.title as string}</h2>
        <Ingress>
          Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en
          enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse
          palettene på et helt brukergrensesnitt eller for å kategorisere produkt-spesifikt innhold.
        </Ingress>
      </ArticleWrapper>

      {ThemeColors.map((theme, index) => (
        <ArticleWrapper key={index}>
          <h5 className="text-[24px] text-[#481125]">{theme.title}</h5>
          <Body>{theme.description}</Body>
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ArticleWrapper>
      ))}
    </SectionLayout>
  )
}
