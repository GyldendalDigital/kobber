import Image from "next/image"
import Link from "next/link"
import { PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { SubHeading } from "@/components/sub-heading"
import { metadata as contactPage } from "@/app/(routes)/kom-i-gang/kontakt/page"
import { metadata as logoPage } from "@/app/(routes)/merkevare/logo/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Merkevare­hierarki",
  image: placeholderImageUrl({}),
  description:
    "Merkevarearkitekturens formål er å gi en klar struktur over merkevaren vår og hvordan produktene og løsningene våre henger sammen. Arkitekturen skal sørge for at vi snakker med konsistent visuell stemme, slik at vi styrker kommunikasjonen med og relasjonene til alle våre målgrupper. Dette vil gi større kraft til merkevaren Gyldendal, og gi oss bedre muligheter til å skape større verdi og nå våre mål.",
}

export default function MerkevareHeriarkiPage() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
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
        <Image
          src={damImageUrl("4WYa-6IgqHmAdCdw9SxjB3")}
          width={711}
          height={294}
          alt="Illustrasjon"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <SubHeading>
          <span className="text-highlight">Nivå 1</span>
          <br />
          Mormerke
        </SubHeading>
        <p>
          Nivå 1.1 består av Gyldendals primærlogo og brukes alltid som avsender på Gyldendals
          utgivelser, arrangementer og lignende. Mer informasjon om primærlogoen og bruken av den,
          kan du finne i{" "}
          <Link className="underline" href={logoPage.href}>
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
          src={damImageUrl("7bPjxwM9Kw2BLLWhKGBQJ2")}
          width={711}
          height={294}
          alt="Illustrasjon nivå 1"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <SubHeading>
          <span className="text-highlight">Nivå 2</span>
          <br />
          Støttet utgivelse og verk
        </SubHeading>
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
          src={damImageUrl("3TCYMdT8qra86ZHBhPp9FE")}
          width={711}
          height={294}
          alt="Illustrasjon nivå 2"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <SubHeading>
          <span className="text-highlight">Nivå 3</span>
          <br />
          Støttet identitet
        </SubHeading>
        <p>
          Støttede identiteter brukes av digitale tjenester som utvikles av Gyldendal og derfor har
          Gyldendal som del av sin logo. Disse har egne logosymboler, men følger Gyldendals regler
          for farger, komposisjon og typografisk oppsett.
        </p>
        <p>
          Alle tjenester som benytter seg av Gyldendal-navnet skal benytte seg av samme
          logostruktur. Vi ønsker å unngå fargedifferensiering på tjenester, men unntak gjøres i
          tilfeller hvor det gir mening i konkurransebildet. Slike unntak må søkes om; se{" "}
          <Link className="underline" href={contactPage.href}>
            kontaktsiden
          </Link>
          .
        </p>
        <Image
          src={damImageUrl("CJ8mJ2oVaqu8ww95BaQW3A")}
          width={711}
          height={294}
          alt="Illustrasjon nivå 3"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <SubHeading>
          <span className="text-highlight">Nivå 4</span>
          <br />
          Frittstående identitet
        </SubHeading>
        <p>
          Frittstående identiteter er selvstendige merkevarer og tjenester som, av strategiske
          grunner, kommuniserer uten å fremheve tilknytningen til Gyldendal. Dette kan være
          nødvendig for å bygge unike assosiasjoner, nå en spesifikk målgruppe, eller ta en
          uavhengig posisjon i markedet. Disse merkevarene opererer helt selvstendig og benytter
          ikke designsystemet Kobber.
        </p>
        <Image
          src={damImageUrl("6EPS5_bUKpC8avwgVMLz1C")}
          width={711}
          height={294}
          alt="Illustrasjon nivå 4"
        />
      </ArticleWrapper>
    </SectionLayout>
  )
}
