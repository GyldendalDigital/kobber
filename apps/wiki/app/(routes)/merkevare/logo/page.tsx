import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandLogo } from "./logo.meta"

export const metadata = metaBrandLogo

export default function Page() {
  return (
    <SectionLayout>
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

      {metadata.children && <FeatureBoxGrid items={metadata.children} />}
    </SectionLayout>
  )
}
