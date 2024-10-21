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
    src: "https://s3-alpha-sig.figma.com/img/b1a0/f34d/889536d0ac047899333d20aa45a622fd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoV54DNpsmp4vmpA44-E0cbiqhvSj8eVt5jZaC30XGE1QxUZGkNYkXRzY4jkLCfedvXRAT9rBfT-1RBdKQwIvqGg6OaSMdhKFJXcUms794cxxA9ZL6KRxl0u-897~AJ08SiddNIKAjKKq1n2y3x05LbVOrLzTAKB0IZ64aixswGa39gP62aSvuDfk8GlqckqV27qu1wvZp4oTRVzYz1eu9FfIAeZpCY0UwF-SpCCclwB703gHQYlg5mgDlYmff68JNfgnMR0V~WMu18--CRojSDzXOdKRrwDBhamvwLkiCQLYeXNxR5o-qqAuFZuaSo0RENf89E5wEW8d~sIulvKTQ__",
    alt: "",
    width: 370,
    height: 243,
  },
]

const levelOneIllustrations: IllustrationType[] = [
  {
    src: "https://s3-alpha-sig.figma.com/img/c41a/8436/1687aad9fea2dc2061f6a65f43ef7b01?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1u4DKFd~LM1useaeBeXi4bCQ~kA48pz8SYkU~D7ZzVpZdnk1D1Y7TyzLO3Pr7TUFQ4PUcPXm87cD9nwOpqkxHyeT~SB9R9SvG-LISRgCRMJvdXW56jpvuR0QYy9eRKRPx53-Vor0zfupcQIMbeHn9WYuhqO9N8C3Lcm9-1UY2NYayv5urcMEKCGaulnWa9HXj9rfO9bJMpT27T6qjH~SW3r0CQmkhbQgXu3WvPDWWDbb2JdFa98N86fQ9Q8dz~cpf2BIvrXI5dckZvpTXMlpLb~8H2KdRq-tiJBdjTdwX5ot5v0-XnLSQiumUUrX7mNHZQWoZN3cB5RQk7qQzuaEg__",
    alt: "",
    width: 373,
    height: 300,
  },
]

const levelTwoIllustrations: IllustrationType[] = [
  {
    src: "https://s3-alpha-sig.figma.com/img/25c5/f67b/7ab92d45fdedf446e85697eeb9179b2c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C93Xotb6GZtw92zOE3LvIdkndZ-kxt4Ug41f0H0gQ6Yw0h~2BQv6hgRXCPjmmqPb9YF-CzuHL5xRNzDYfR-HOvxQOcH6CVhPjMCujhvYi7UmNLWFPcOa1vdA~yNM~0LAoGhF0tQ5q6ap5A8lQHmnsTYsCAgYDEWdGoeIvv9TQ5iGFkZkahcwCQJXi6ekxd7VmFt2krgOhvNBkzM94Ca0fODd2x8S2qO9qeWKU0~7ik9YeIKSpNT1tcuNls-CvF6JAOLpS3GMwcsFiq6eOSbYzFsPTdtdA~eYrIMKXj0vtFKm0VLn~eWFL8HMhvASmQIY1L8AL-~dA0xtGO1sOerDDw__",
    width: 503,
    height: 221,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/98a8/0e8f/94bc111003b4891bcff5380992289885?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jniF0xOnHk4fftZV-zlPrKDAOsBYAF8Jg1uwJdhzb6DUmg4yYvVs2xn0sHe4ifTv-ELp8URPiMX0JewXbFZNHNDnqvTS4ahZpyWY5NGPdWzUNZRYQZz~BMF5Sp9QI2CjMWR8MfgBF4jKdmbCt~IZ58a-wwcs71VXW75pK1g2v0jvZH~pPKeu9Mu6WOkAANlQ9R67WETMhHQw1TKPEI4IOuticMpzBSBsYycHJ5Md27~O00sfWrxLm-eJW1yjymDQ403PmFAop1Zxg3AROcYBI8-mVrmtYpW-qXvN~wS~yF6o5Kao2w4sYro7CUm-HuB7Q~ckkjX8VU621pCxYN-i5Q__",
    width: 503,
    height: 298,
  },
]

const levelThreeIllustrations: IllustrationType[] = [
  {
    src: "https://s3-alpha-sig.figma.com/img/9fda/4e29/fa7e02fd677f6364343d409c64b9e92e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mnyvpo~M16a-UbNzURlLVvgAyaqu~apxZw6nk3NVCp01iBOCsElpeZ0DQoM6CXx9BjFC25hMWxk0nRm-haZ8Z92gZ~b1of-bOwk7B1hPsomAsmZhu8PyPVJ3vPLbFNzLqiZu6WVpl1PzTY98~XyhgrpBqEFaiLInVZ5SnpJGtZr3N8lokJVIhRwEzeypCDo7oeLMtyF~6qx2OhVQQOOZiDQDZb~DMr2uNYKlsckZe~XVjYxEsQifyyCSTL-w~KCJnZ~akdH33tyulRMhqp4lOU80pZOyAuj1MOgccWSlLkKWreRGWFCxRK5v8wEiBuQ9PpIVWRC7aPCzinaPdwzZLQ__",
    width: 435,
    height: 334,
  },
]

const levelFourIllustrations: IllustrationType[] = [
  {
    src: "https://s3-alpha-sig.figma.com/img/a340/b22c/991b9328727356c086c35ec9aa51eed6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KDl-6GJkU5PMvri3I7IgM5BytYyuxn7aX0C1S-807BcX3Ps3Hun8JKWXRVLRr6K6Jch8f6TRS2otDn1gTj8Vn22lmHFJEsYUnJ7I8ueOB74E6boRWc6gPsgmUjVTYUzgdjaQe~h7DvmZL~1EJr0ulul71~nJf5FpdgZ4h0elS~zpuc7RvPSnz4884quWtBA0eNGWGPG-06ZYRPwWFFEn~3UbVZVzb2Gv5VdSk5lQuvYPgWS3OEyjcLKGJoArIHXQTjMCJ6d~OAMI9u2xab6wb-lS8rbvsGk3ESHTnbpXgPqMfOdclYkqhefj6SDjIxF~GiBh77o-n0qVylgiS5wxbQ__",
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
