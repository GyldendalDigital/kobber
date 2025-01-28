import { KobberHeading, KobberTextWrapper } from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentLayout } from "@/components/content-layout"
import { HeroImage } from "@/components/hero-image"
import { metaWordTemplate } from "./word-template.meta"

export const metadata = metaWordTemplate

export default function WordTemplatePage() {
  return (
    <ContentLayout>
      <HeroImage src={metadata.image} />
      <KobberTextWrapper>
        <KobberHeading>Dokument- og brevmal</KobberHeading>
        <p>
          For dokumenter og brev brukes primærlogo plassert i venstre topp. Dokumentets innhold
          skrives med Arial 10 pkt. Hovedtittel settes i Karmin i størrelse 24 pkt. Undertitler
          settes i 12 pkt.
        </p>
        <p>
          Det bør unngås å bruke uthevelser i fet tekst eller i karminrød i dokumentets brødtekst
          fordi det gjør uttrykket urolig. Avsnitt markeres med en blank linje.
        </p>
        <p>
          Plassering av adressen passer til vinduet på konvolutter. For konvolutter plasseres
          primærlogo i venstre topp.
        </p>
        <p>Disse malene for dokument og brev er tilgjengelig i Word.</p>
      </KobberTextWrapper>
    </ContentLayout>
  )
}
