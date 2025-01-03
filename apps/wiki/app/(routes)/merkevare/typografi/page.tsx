import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandTypography } from "./brandTypography.meta"

export const metadata = metaBrandTypography

export default function TypografiPage() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
        <p>
          Typografien skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge
          som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en
          moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og
          innovasjon på en varm og uhøytidelig måte.
        </p>
      </KobberTextWrapper>

      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
