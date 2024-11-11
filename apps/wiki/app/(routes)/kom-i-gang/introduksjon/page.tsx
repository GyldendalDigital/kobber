import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Body } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { Ingress } from "../../../../components/kobber-components"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Introduksjon",
  image: placeholderImageUrl({}),
  description: "",
}
export default function Introduksjon() {
  return (
    <SectionLayout>
      <HeroImage
        src={
          "https://dam-p-gyldendal.pqcloud.eu/authkey/1AwlfRxdpz/preview/2bULAP2gabp9rC4A1CbQSB/previews/maxWidth_1600_maxHeight_1600.jpg/*/_DX_2016_preview.jpg?_=1"
        }
      />
      <div className="grid gap-page/gap/horizontal">
        <ArticleWrapper className="grid gap-y-text-section/gap/header/horizontal">
          <h1 className="text-[48px] font-light leading-[57.6px] text-[#481125]">
            Designsystemet Kobber
          </h1>
          <h2 className="text-[48px] leading-[57.6px] text-[#DC134F]">
            Et verktøy for samspill og synergier
          </h2>

          <Ingress className="max-w-[712px]">
            Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem
            bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk,
            retningslinjer og kode. Samtidig tydeliggjør det vår merkevarestrategi, våre felles
            verdier og de opplevelsene vi har som mål å tilby våre sluttbrukere.
          </Ingress>
        </ArticleWrapper>
        <SectionLayout className="max-w-[712px]">
          <div>
            <span className="text-[24px] text-[#481125]">Hvorfor et designsystem?</span>
            <Body>
              Designsystemet muliggjør en raskere og mer effektiv praksis for konsistent
              merkevarebygging, produktutvikling og kommunikasjon. Det skaper en tydeligere felles
              retning, og bidrar til økt kjennskap til og gjenkjennelighet av Gyldendal.
              <br />
              <br />
              Det skal bidra til å styrke fellesskapsfølelsen på tvers av hele Gyldendal, ved å
              legge til rette for bedre samarbeid, transparens, synergier og deling av kompetanse og
              metoder på tvers av fagfelt, avdelinger og produkter.
            </Body>
          </div>
          <div>
            <span className="text-[24px] text-[#481125]">Hva er kobber?</span>

            <Body>
              Navnet «Kobber» er kallenavnet til Gyldendals designsystem. Det er inspirert av
              kobberdøra, inngangen til Gyldendalhuset, og symboliserer det tradisjonsrike i
              kombinasjon med modernisering og fremtid. Kobber er et stabilt og lett bearbeidbart
              metall som leder strøm, og representerer dermed både våre fysiske produkter og
              digitale løsninger.
              <br />
              <br />
              Denne nettsiden er en veileder for å sikre konsistent representasjon og implementasjon
              av Gyldendals merkevare- og designsystem på tvers av kontekster og flater. Den er ment
              for internt bruk og for eventuelle eksterne samarbeidspartnere.
              <br />
              <br />
              Det er viktig å sette seg inn i retningslinjene for å opprettholde merkevarens
              integritet og styrke over tid. Samtidig er det viktig å komme med tilbakemelding og
              forslag til oppdatering og forbedring. Sammen skaper vi en levende profil!
            </Body>
          </div>
        </SectionLayout>
      </div>
    </SectionLayout>
  )
}
