import { HeroImage } from "@/components/hero-image"
import { SectionLayout } from "@/components/section-layout"
import { metaWordTemplate } from "./word-template.meta"
import { KobberHeading, KobberTextWrapper } from "@gyldendal/kobber-components/react-ssr-safe"

export const metadata = metaWordTemplate

export default function WordTemplatePage() {
  return (
    <SectionLayout>
      <HeroImage src={metadata.image} />
      <KobberTextWrapper>
        <KobberHeading>Dokument- og brevmal</KobberHeading>
        <p>
          For dokumenter og brev brukes primærlogo plassert i venstre topp. Dokumentets innhold
          skrives med Arial 10 pkt. Hovedtittel settes i Karmin i størrelse 24 pkt. Undertitler
          settes i 12 pkt.
          <br />
          <br />
          Det bør unngås å bruke uthevelser i fet tekst eller i karminrød i dokumentets brødtekst
          fordi det gjør uttrykket urolig. Avsnitt markeres med en blank linje.
          <br />
          <br />
          Plassering av adressen passer til vinduet på konvolutter. For konvolutter plasseres
          primærlogo i venstre topp.
          <br />
          <br />
          Disse malene for dokument og brev er tilgjengelig i Word.
        </p>
      </KobberTextWrapper>
    </SectionLayout>
  )
}
