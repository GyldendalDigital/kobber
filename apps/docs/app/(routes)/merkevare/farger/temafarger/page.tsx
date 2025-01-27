import { ThemeColors } from "@/data/color-palettes"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandColorTheme } from "./theme.meta"

export const metadata = metaBrandColorTheme

export default function Temafarger() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      {ThemeColors.map((theme, index) => (
        <KobberTextWrapper key={index}>
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
