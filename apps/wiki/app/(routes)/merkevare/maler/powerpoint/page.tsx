import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { HeroImage } from "@/components/hero-image"
import { SectionLayout } from "@/components/section-layout"
import { metaPowerpointTemplate } from "./powerpoint-template.meta"

export const metadata = metaPowerpointTemplate

export default function PowerpointTemplatePage() {
  return (
    <SectionLayout>
      <HeroImage src={metadata.image} />
      <KobberTextWrapper>
        <KobberHeading>Presentasjonsmal</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
        {/* TODO: Remove the mt-5 look figma */}
        <p>
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
      </KobberTextWrapper>
    </SectionLayout>
  )
}
