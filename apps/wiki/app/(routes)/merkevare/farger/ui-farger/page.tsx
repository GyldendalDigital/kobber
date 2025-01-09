import { UIColors } from "@/data/color-palettes"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandColorUi } from "./ui.meta"

export const metadata = metaBrandColorUi

export default function UiFarger() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      {UIColors.map((theme, index) => (
        <KobberTextWrapper key={index} className="gap-0">
          <KobberHeading level="h2" variant="heading small">
            {theme.title}
          </KobberHeading>
          {theme.description && <p>{theme.description}</p>}
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </KobberTextWrapper>
      ))}
    </SectionLayout>
  )
}
