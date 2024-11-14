import Image from "next/image"
import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { SubHeading } from "@/components/sub-heading"

export { metadata as pageGettingStartedIntro }

export const metadata = pageMetadata(import.meta.url, {
  title: "Introduksjon",
  image: placeholderImageUrl({}),
  description:
    "Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk, retningslinjer og kode. Samtidig tydeliggjør det vår merkevarestrategi, våre felles verdier og de opplevelsene vi har som mål å tilby våre sluttbrukere.",
})

export default function Introduksjon() {
  return (
    <SectionLayout>
      <HeroImage src={damUrl("2bULAP2gabp9rC4A1CbQSB")} />

      <ArticleWrapper>
        <Heading>Designsystemet Kobber</Heading>

        <h2 className="font-lyon text-[48px] leading-[57.6px] text-[#DC134F]">
          Et verktøy for samspill og synergier
        </h2>

        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[712px]">
        <SubHeading>Hvorfor et designsystem?</SubHeading>
        <p>
          Designsystemet muliggjør en raskere og mer effektiv praksis for konsistent
          merkevarebygging, produktutvikling og kommunikasjon. Det skaper en tydeligere felles
          retning, og bidrar til økt kjennskap til og gjenkjennelighet av Gyldendal.
        </p>
        <p>
          Det skal bidra til å styrke fellesskapsfølelsen på tvers av hele Gyldendal, ved å legge
          til rette for bedre samarbeid, transparens, synergier og deling av kompetanse og metoder
          på tvers av fagfelt, avdelinger og produkter.
        </p>
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[712px]">
        <SubHeading>Hva er kobber?</SubHeading>

        <Image
          src={damUrl("7tpgwMbB4hmBMGYLZLYfHi", ".svg")}
          width={711}
          height={355}
          className="object-contain"
          alt="Forklaringsbilde av Kobber"
        />

        <p>
          Navnet «Kobber» er kallenavnet til Gyldendals designsystem. Det er inspirert av
          kobberdøra, inngangen til Gyldendalhuset, og symboliserer det tradisjonsrike i kombinasjon
          med modernisering og fremtid. Kobber er et stabilt og lett bearbeidbart metall som leder
          strøm, og representerer dermed både våre fysiske produkter og digitale løsninger.
        </p>
        <p>
          Denne nettsiden er en veileder for å sikre konsistent representasjon og implementasjon av
          Gyldendals merkevare- og designsystem på tvers av kontekster og flater. Den er ment for
          internt bruk og for eventuelle eksterne samarbeidspartnere.
        </p>
        <p>
          Det er viktig å sette seg inn i retningslinjene for å opprettholde merkevarens integritet
          og styrke over tid. Samtidig er det viktig å komme med tilbakemelding og forslag til
          oppdatering og forbedring. Sammen skaper vi en levende profil!
        </p>
      </ArticleWrapper>
    </SectionLayout>
  )
}
