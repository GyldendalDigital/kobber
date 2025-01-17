import Image from "next/image"
import {
  KobberHeading,
  KobberIngress,
  KobberTextHighlight,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { SectionLayout } from "@/components/section-layout"
import { metaGettingStarted } from "../gettingStarted.meta"
import { metaGettingStartedIntro } from "./intro.meta"

export const metadata = metaGettingStartedIntro

export default function Introduksjon() {
  return (
    <SectionLayout>
      {metaGettingStarted.image && (
        <Image
          src={metaGettingStarted.image}
          width={858}
          height={293}
          className="h-[293px] w-full rounded-[16px] object-cover object-top"
          alt="Image"
        />
      )}

      <KobberTextWrapper>
        <KobberHeading>
          Designsystemet Kobber <br />
          <KobberHeading level="div" font="secondary">
            <KobberTextHighlight>Et verktøy for samspill og synergier</KobberTextHighlight>
          </KobberHeading>
        </KobberHeading>

        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[712px]">
        <KobberHeading level="h2" variant="title medium">
          Hvorfor et designsystem?
        </KobberHeading>
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
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[712px]">
        <KobberHeading level="h2" variant="title medium">
          Hva er kobber?
        </KobberHeading>

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
      </KobberTextWrapper>
    </SectionLayout>
  )
}
