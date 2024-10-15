import { Metadata } from "next"
import { PageDetails } from "@/types/types"
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils"
import { ContentSection } from "@/components/content-section"
import { Illustration } from "@/components/illustration"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

// export const pageDetailsMerkevareHierarki: PageDetails = {
//   href: pagePathname(import.meta.url),
//   title: "Merkevarehierarki",
//   image: placeholderImageUrl({}),
// }

// export const metadata: Metadata = {
//   title: documentTitle(pageDetailsMerkevareHierarki.title),
//   description:
//     "Merkevarehierarki skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og innovasjon på en varm og uhøytidelig måte.",
// }

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
        <Illustration
          src={
            "https://s3-alpha-sig.figma.com/img/b1a0/f34d/889536d0ac047899333d20aa45a622fd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoV54DNpsmp4vmpA44-E0cbiqhvSj8eVt5jZaC30XGE1QxUZGkNYkXRzY4jkLCfedvXRAT9rBfT-1RBdKQwIvqGg6OaSMdhKFJXcUms794cxxA9ZL6KRxl0u-897~AJ08SiddNIKAjKKq1n2y3x05LbVOrLzTAKB0IZ64aixswGa39gP62aSvuDfk8GlqckqV27qu1wvZp4oTRVzYz1eu9FfIAeZpCY0UwF-SpCCclwB703gHQYlg5mgDlYmff68JNfgnMR0V~WMu18--CRojSDzXOdKRrwDBhamvwLkiCQLYeXNxR5o-qqAuFZuaSo0RENf89E5wEW8d~sIulvKTQ__"
          }
        />
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
        <div>Illustration</div>
      </ContentSection>
    </SectionLayout>
  )
}
