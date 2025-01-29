import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentLayout } from "@/components/content-layout"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import { metaBrandColor } from "./brandColor.meta"

export const metadata = metaBrandColor

export default function FargerSection() {
  return (
    <ContentLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>
          Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og
          håndtere et bredt utvalg av ulike målgrupper. Det skal være varmt og gjenkjennelig,
          samtidig som det skal være behagelig i daglig bruk av digitale tjenester. Mangfold er en
          av Gyldendals viktigste verdier, og det skal derfor være lett å lage fargekombinasjoner
          som oppfyller kravene til universell utforming.
        </KobberIngress>
      </KobberTextWrapper>

      <FeatureBoxGrid items={metadata.children ?? []} />
    </ContentLayout>
  )
}
