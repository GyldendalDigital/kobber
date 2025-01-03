import { UIColors } from "@/data/color-palettes"
import { KobberIngress, KobberTextWrapper } from "@gyldendal/kobber-components/react-ssr-safe"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandColorUi } from "./ui.meta"

export const metadata = metaBrandColorUi

export default function UiFarger() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <h2 className="text-[48px] text-[#691837]">{metadata.title as string}</h2>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      {UIColors.map((theme, index) => (
        <KobberTextWrapper key={index} className="gap-0">
          <h5 className="text-[24px] text-[#481125]">{theme.title}</h5>
          <p>{theme.description}</p>
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </KobberTextWrapper>
      ))}
    </SectionLayout>
  )
}
