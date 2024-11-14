import {
  pageBrandColorsIdentity,
  pageBrandColorsTheme,
  pageBrandColorsUi,
} from "@/lib/metadata.pages"
import { pageMetadata } from "@/lib/metadata.utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export const metadata = pageMetadata(import.meta.url, {
  title: "Farger",
  image: pageBrandColorsIdentity.image,
  children: [pageBrandColorsIdentity, pageBrandColorsTheme, pageBrandColorsUi],
  description:
    "Farger er en viktig del av Gyldendals merkevare, og er laget for å balansere det funksjonelle og det emosjonelle. Fargepaletten er laget for å håndtere et bredt utvalg av ulike målgrupper.",
})

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
