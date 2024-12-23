import Image from "next/image"
import Link from "next/link"
import {
  KobberHeading,
  KobberIngress,
  KobberTextHighlight,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { SectionLayout } from "@/components/section-layout"
import { metaGettingStartedContact } from "../../kom-i-gang/kontakt/contact.meta"
import { metaBrandLogo } from "../logo/logo.meta"
import { metaBrandLevel } from "./brandLevel.meta"

export const metadata = metaBrandLevel

export default function MerkevareHeriarkiPage() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <p>
          Gyldendal benytter seg av et hybridhierarki med et overordnet mormerke. Dette betyr at
          undermerkevarer skal enten være veldig tett knyttet til Gyldendal, eller fremstå
          fullstendig adskilt.
        </p>
        <p>
          På grunnlag av dette har vi fire nivåer i Gyldendals merkevarehierarki: mormerke, støttede
          utgivelser og verk, støttede identiteter og frittstående identiteter. Disse forklares mer
          i detalj på denne siden.
        </p>
        <Image src={damUrl("4WYa-6IgqHmAdCdw9SxjB3")} width={711} height={294} alt="Illustrasjon" />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          <KobberTextHighlight>Nivå 1</KobberTextHighlight>
          <br />
          Mormerke
        </KobberHeading>
        <p>
          Nivå 1.1 består av Gyldendals primærlogo og brukes alltid som avsender på Gyldendals
          utgivelser, arrangementer og lignende. Mer informasjon om primærlogoen og bruken av den,
          kan du finne i{" "}
          <Link className="underline" href={metaBrandLogo.href}>
            logo
          </Link>
          .
        </p>
        <p>
          Nivå 1.2 består av primærlogoen kombinert med en undertittel. Denne brukes utelukkende på
          digitale flater for å indikere et område spisset mot en målgruppe. Den skal tydeliggjøre
          kommunikasjon og tilbud ut mot spesifikke målgrupper som for eksempel sykepleiere,
          barneskolelærere og lignende.
        </p>
        <p>
          Nivå 1.2 brukes aldri som avsender på bøker, arrangementer eller annen markedsgrafikk. Det
          skal heller aldri lagres som en logovariant, og undernivået skrives kun ut som tekst på
          digitale flater.
        </p>
        <Image
          src={damUrl("7bPjxwM9Kw2BLLWhKGBQJ2")}
          width={711}
          height={294}
          alt="Illustrasjon nivå 1"
        />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          <KobberTextHighlight>Nivå 2</KobberTextHighlight>
          <br />
          Støttet utgivelse og verk
        </KobberHeading>
        <p>
          Nivå 2 beskriver hvordan logoer brukes i utgivelser og verk som skal ha Gyldendal som
          avsender.
        </p>
        <p>
          Nivå 2.1 brukes hovedsakelig i undervisning for å lage verksprodukter som skal være
          gjenkjennelige på tvers av analoge flater til digitale. Her benyttes illustrasjoner eller
          foto i stedet for logosymboler for å skille dem fra tjenestene. Gyldendal-logoen skal
          fortsatt brukes som avsender på fysiske omslag.
        </p>
        <p>
          Nivå 2.2 er enkeltutgivelser som ikke ses på som en serie, fra for eksempel undervisning
          og akademisk. Her benyttes PP Mori som tittelfont, og Gyldendals mormerke som avsender på
          boken.
        </p>
        <p>
          Nivå 2.3 er for skjønnlitteratur, sakprosa og lignende som benytter Gyldendals mormerke
          som avsender.
        </p>
        <Image
          src={damUrl("3TCYMdT8qra86ZHBhPp9FE")}
          width={711}
          height={294}
          alt="Illustrasjon nivå 2"
        />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          <KobberTextHighlight>Nivå 3</KobberTextHighlight>
          <br />
          Støttet identitet
        </KobberHeading>
        <p>
          Støttede identiteter brukes av digitale tjenester som utvikles av Gyldendal og derfor har
          Gyldendal som del av sin logo. Disse har egne logosymboler, men følger Gyldendals regler
          for farger, komposisjon og typografisk oppsett.
        </p>
        <p>
          Alle tjenester som benytter seg av Gyldendal-navnet skal benytte seg av samme
          logostruktur. Vi ønsker å unngå fargedifferensiering på tjenester, men unntak gjøres i
          tilfeller hvor det gir mening i konkurransebildet. Slike unntak må søkes om; se{" "}
          <Link className="underline" href={metaGettingStartedContact.href}>
            kontaktsiden
          </Link>
          .
        </p>
        <Image
          src={damUrl("CJ8mJ2oVaqu8ww95BaQW3A")}
          width={711}
          height={294}
          alt="Illustrasjon nivå 3"
        />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          <KobberTextHighlight>Nivå 4</KobberTextHighlight>
          <br />
          Frittstående identitet
        </KobberHeading>
        <p>
          Frittstående identiteter er selvstendige merkevarer og tjenester som, av strategiske
          grunner, kommuniserer uten å fremheve tilknytningen til Gyldendal. Dette kan være
          nødvendig for å bygge unike assosiasjoner, nå en spesifikk målgruppe, eller ta en
          uavhengig posisjon i markedet. Disse merkevarene opererer helt selvstendig og benytter
          ikke designsystemet Kobber.
        </p>
        <Image
          src={damUrl("6EPS5_bUKpC8avwgVMLz1C")}
          width={711}
          height={294}
          alt="Illustrasjon nivå 4"
        />
      </KobberTextWrapper>
    </SectionLayout>
  )
}
