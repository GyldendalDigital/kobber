import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentLayout } from "@/components/content-layout"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import { metaBrandIcons } from "./brandIcons.meta"

export const metadata = metaBrandIcons

export default function IkonerPage() {
  return (
    <ContentLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>
          Vi bruker ikoner for å gjøre det enklere for brukerne å forstå innhold, elementer og
          oppgaver. Et effektivt ikon formidler et konsept på en måte som er intuitivt for brukerne.
        </KobberIngress>
      </KobberTextWrapper>

      <FeatureBoxGrid items={metadata.children ?? []} />
    </ContentLayout>
  )
}
