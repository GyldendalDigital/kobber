import { ThemeColors } from "@/data/color-palettes"
import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandColorTheme } from "./theme.meta"

export const metadata = metaBrandColorTheme

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
