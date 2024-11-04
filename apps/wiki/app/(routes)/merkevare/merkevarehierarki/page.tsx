import { IllustrationType, PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { ContentSection } from "@/components/content-section"
import { Illustrations } from "@/components/illustrations"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Merkevarehierarki",
  image: placeholderImageUrl({}),
  description:
    "Merkevarehierarki skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og innovasjon på en varm og uhøytidelig måte.",
}

const merkevareIllustration: IllustrationType[] = [
  {
    src: null,
    alt: "",
    width: 370,
    height: 243,
  },
]

const levelOneIllustrations: IllustrationType[] = [
  {
    src: null,
    alt: "",
    width: 373,
    height: 300,
  },
]

const levelTwoIllustrations: IllustrationType[] = [
  {
    src: null,
    width: 503,
    height: 221,
  },
  {
    src: null,
    width: 503,
    height: 298,
  },
]

const levelThreeIllustrations: IllustrationType[] = [
  {
    src: null,
    width: 435,
    height: 334,
  },
]

const levelFourIllustrations: IllustrationType[] = [
  {
    src: null,
    width: 400,
    height: 315,
  },
]

export default function MerkevareHeriarkiPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Merkevarehierarki"
        ingress="Merkevarehierarkiets formål er å gi en klar struktur over merkevaren vår og hvordan produktene og løsningene våre henger sammen. Hierarkiet skal fremme relasjonene til våre eksterne målgrupper og sette oss i stand til å nå våre mål. Når strukturen følges, gir det oss rom til å fokusere mer på de verdiene vi skaper."
      />

      <ContentSection
        textCollection={{
          text: `Gyldendal benytter seg av et hybridhierarki med et overordnet mormerke. Dette betyr at under-merkevarer skal enten være veldig tett knyttet til Gyldendal, eller fremstå fullstendig adskilt. 

På grunnlag av dette har vi fire nivåer i Gyldendals merkevarehierarki: mormerke, støttede utgivelser og verk, støttede identiteter og frittstående identiteter. Disse forklares mer i detalj på denne siden.`,
        }}
      >
        <Illustrations illustrations={merkevareIllustration} />
      </ContentSection>

      <ContentSection
        textCollection={{
          label: "Nivå 1",
          heading: "Mormerke",
          text: `Nivå 1.1 består av Gyldendals primærlogo og brukes alltid som avsender på Gyldendals utgivelser, arrangementer og lignende. Mer informasjon om primærlogoen og bruken av den, kan du finne i logo.

Nivå 1.2 består av primærlogoen kombinert med en undertittel. Denne brukes utelukkende på digitale flater for å indikere et område spisset mot en målgruppe. Den skal tydeliggjøre kommunikasjon og tilbud ut mot spesifikke målgrupper som for eksempel sykepleiere, barneskolelærere og lignende.

Nivå 1.2 brukes aldri som avsender på bøker, arrangementer eller annen markedsgrafikk. Det skal heller aldri lagres som en logovariant, og undernivået skrives kun ut som tekst på digitale flater.`,
        }}
      >
        <Illustrations illustrations={levelOneIllustrations} />
      </ContentSection>
      <ContentSection
        textCollection={{
          label: "Nivå 2",
          heading: "Støttet utgivelse og verk",
          text: `Nivå 2 beskriver hvordan logoer brukes i utgivelser og verk som skal ha Gyldendal som avsender.

Nivå 2.1 brukes hovedsakelig i undervisning for å lage verksprodukter som skal være gjenkjennelige på tvers av analoge flater til digitale. Her benyttes illustrasjoner eller foto i stedet for logosymboler for å skille dem fra tjenestene. Gyldendal-logoen skal fortsatt brukes som avsender på fysiske omslag.

Nivå 2.2 er enkeltutgivelser som ikke ses på som en serie, fra for eksempel undervisning og akademisk. Her benyttes PP Mori som tittelfont, og Gyldendals mormerke som avsender på boken.

Nivå 2.3 er for skjønnlitteratur, sakprosa og lignende som benytter Gyldendals mormerke som avsender.`,
        }}
      >
        <Illustrations illustrations={levelTwoIllustrations} />
      </ContentSection>
      <ContentSection
        textCollection={{
          label: "Nivå 3",
          heading: "Støttet identitet",
          text: `Når man skal støtte seg til Gyldendal-merkevaren som avsender i produkter og tjenester, må man bygge en støttet identitet som benytter Gyldendals typografi, logostruktur og identitetselementer. Dette skal sikre at alle som benytter seg av Gyldendals profil også bidrar til å bevare, styrke og videreføre den.

I noen tilfeller kan en støttet identitet avvike fra Gyldendals fargepalett, for eksempel hvis en direkte konkurrent bruker lignende farger.  Unntak må søkes om.

Støttede identiteter brukes av digitale tjenester som utvikles av Gyldendal og derfor har Gyldendal som del av sin logo. Disse har egne logosymboler, men følger Gyldendals regler for farger, komposisjon og typografisk oppsett.`,
        }}
      >
        <Illustrations illustrations={levelThreeIllustrations} />
      </ContentSection>
      <ContentSection
        textCollection={{
          label: "Nivå 4",
          heading: "Frittstående identitet",
          text: `Om en merkevare ikke ønsker å benytte seg av assosiasjonene til Gyldendal ut mot eksterne målgrupper, skal man bygge identiteter som fremstår helt frittstående. Det betyr at fonter, farger og identitetselementer fra Gyldendals designmanual ikke skal benyttes.

Grunner for å gjøre dette kan være at helt andre assosiasjoner kreves mot eksterne målgrupper, eller at man bygger en merkevare som skal posisjoneres som en utfordrer - noe som er i strid med Gyldendals overordnede posisjon som en leder. 

Merk at man uansett ikke kan bygge undermerkevarer som er i strid med verdiene i Gyldendals overordnede merkevareplattform.`,
        }}
      >
        <Illustrations illustrations={levelFourIllustrations} />
      </ContentSection>
    </SectionLayout>
  )
}
