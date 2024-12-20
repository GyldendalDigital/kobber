import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandColor } from "./brandColor.meta"

export const metadata = metaBrandColor

export default function FargerSection() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>
          Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og
          håndtere et bredt utvalg av ulike målgrupper. Det skal være varmt og gjenkjennelig,
          samtidig som det skal være behagelig i daglig bruk av digitale tjenester. Mangfold er en
          av Gyldendals viktigste verdier, og det skal derfor være lett å lage fargekombinasjoner
          som oppfyller kravene til universell utforming.
        </Ingress>
      </ArticleWrapper>

      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
