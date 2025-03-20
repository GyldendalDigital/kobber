import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentLayout } from "@/components/content-layout"
import { HeroImage } from "@/components/hero-image"
import { metaPowerpointTemplate } from "./powerpoint-template.meta"

export const metadata = metaPowerpointTemplate

export default function PowerpointTemplatePage() {
  return (
    <ContentLayout>
      <HeroImage src={metadata.image} />
      <KobberTextWrapper>
        <KobberHeading>Presentasjons­mal</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
        <p>
          Malen følger identitetens fargeutrykk. Tittelsider, sitatsider og ellers andre sider som
          bryter opp vanlige tekstsider, finnes i både en lys og mørk variant. Karminrød brukes som
          bakgrunn for å fremheve mellomdelingsider.
        </p>
        <p>
          Internt brukes systemfonten Arial til alle presentasjoner. Til utvalgte eksterne
          presentasjoner brukes identitetsfonten PP Mori, og da skal designer kontaktes.
        </p>
        <p>
          Om det er behov og ønsker rundt flere sideoppsett som er hyppig brukt, bør dette inn i
          malverket; ta kontakt om du har innspill.
        </p>
        <p>Presentasjonsmalen er tilgjengelig i PowerPoint når du oppretter en ny presentasjon.</p>
      </KobberTextWrapper>
    </ContentLayout>
  )
}
