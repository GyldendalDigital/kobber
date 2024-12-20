import { UIColors } from "@/data/color-palettes"
import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandColorUi } from "./ui.meta"

export const metadata = metaBrandColorUi

export default function UiFarger() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <h2 className="text-[48px] text-[#691837]">{metadata.title as string}</h2>
        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>

      {UIColors.map((theme, index) => (
        <ArticleWrapper key={index} className="gap-0">
          <h5 className="text-[24px] text-[#481125]">{theme.title}</h5>
          <Body>{theme.description}</Body>
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ArticleWrapper>
      ))}
    </SectionLayout>
  )
}
