import { pageMetadata } from "@/lib/metadata.utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandTypography } from "./brandTypography.meta"

export const metadata = metaBrandTypography

export default function TypografiPage() {
  return (
    <SectionLayout>
      <div>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
        <Body>
          Typografien skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge
          som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en
          moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og
          innovasjon på en varm og uhøytidelig måte.
        </Body>
      </div>

      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
