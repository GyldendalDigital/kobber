import { ThemeColors } from "@/data/color-palettes"
import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export { metadata as pageBrandColorsTheme }

export const metadata = pageMetadata(import.meta.url, {
  title: "Temafarger",
  image: damUrl("7zxDRnQoKdQ9TOZHgE5wur"),
  description:
    "Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å kategorisere produktspesifikt innhold.",
})

export default function Temafarger() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <h2 className="text-[48px] text-[#691837]">{metadata.title as string}</h2>
        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>

      {ThemeColors.map((theme, index) => (
        <ArticleWrapper key={index}>
          <h5 className="text-[24px] text-[#481125]">{theme.title}</h5>
          {theme.description && <Body>{theme.description}</Body>}
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ArticleWrapper>
      ))}
    </SectionLayout>
  )
}
