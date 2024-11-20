import { Heading } from "@/components/heading"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaPowerpointTemplate } from "./powerpoint-template.meta"

export const metadata = metaPowerpointTemplate

export default function PowerpointTemplatePage() {
  return (
    <SectionLayout>
      <HeroImage src={metadata.image} />
      <ArticleWrapper>
        <Heading>Presentasjonsmal</Heading>
        <Ingress>{metadata.description}</Ingress>
        {/* TODO: Remove the mt-5 look figma */}
        <p className="mt-5">
          Malen følger identitetens fargeutrykk. Tittelsider, sitatsider og ellers andre sider som
          bryter opp vanlige tekstsider, finnes i både en lys og mørk variant. Karminrød brukes som
          bakgrunn for å fremheve mellomdelingsider.
          <br />
          <br />
          Internt brukes systemfonten Arial til alle presentasjoner. Til utvalgte eksterne
          presentasjoner brukes identitetsfonten PP Mori, og da skal designer kontaktes.
          <br />
          <br />
          Om det er behov og ønsker rundt flere sideoppsett som er hyppig brukt, bør dette inn i
          malverket; ta kontakt om du har innspill.
          <br />
          <br />
          Presentasjonsmalen er tilgjengelig i PowerPoint når du oppretter en ny presentasjon.
        </p>
      </ArticleWrapper>
    </SectionLayout>
  )
}
