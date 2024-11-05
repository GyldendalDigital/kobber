import Image from "next/image"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { BodyText } from "@/components/body-text"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Logo",
  image:
    "https://dam-p-gyldendal.pqcloud.eu/authkey/SQNi-PWIBu/preview/CtM-1DQEapL98pVi_5S64C/previews/maxWidth_1600_maxHeight_1600.jpg/*/Gyldendal%20logo_preview.jpg?_=1",
  description:
    "Logo er et viktig element i Gyldendal sin profil og er med på å danne kjennskap til merkevaren. Nivåene i merkevarearkitekturen reflekteres i logostrukturen. Å følge prinsippene og retningslinjene for logobruk er nødvendig for å beholde integriteten til logoene i alle typer kontekster.",
}

export default function Page() {
  return (
    <SectionLayout>
      <TextCollection
        heading={metadata.title as string}
        ingress="Logo er et viktig element i Gyldendal sin profil og er med på å danne kjennskap til merkevaren. Nivåene i merkevarearkitekturen reflekteres i logostrukturen. Å følge prinsippene og retningslinjene for logobruk er nødvendig for å beholde integriteten til logoene i alle typer kontekster."
      />

      <ContentSection
        textCollection={{
          heading: "Primærlogo",
          ingress: "Gyldendals primærlogo skal brukes i de fleste tilfeller. ",
        }}
        chilClassName="gap-4"
        className="max-w-[711px]"
      >
        <BodyText>
          Den består av logosymbolet som er basert på en norsk gran, samt navnet skrevet i små
          bokstaver, unntatt G-en. Fonten sikrer en god balanse mellom gjenkjennelighet og
          anvendelighet, slik at fonten også kan benyttes i logoer på Gyldendals støttede
          identiteter. Gyldendal har et visuelt distinkt navn slik det skrives ut, og dette benytter
          logoen for å bygge mer gjenkjennelighet i ulike kontekster. Fargen fremstår varm og
          vennlig.
        </BodyText>

        <Image
          src={
            "https://dam-p-gyldendal.pqcloud.eu/authkey/chjI47R7Ug/preview/7QMhG4Do4FMAPwZw2hsz8W/previews/maxWidth_1600_maxHeight_1600.jpg/*/Prim%C3%A6rlogo_preview.jpg?_=1"
          }
          width={711}
          height={355}
          className="object-contain"
          alt="Logo"
        />
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Fargevarianter",
          ingress:
            "Gyldendals primærlogo kan brukes i en positiv og en negativ variant. Den positive varianten brukes på lys bakgrunn og den negative brukes på mørk bakgrunn.",
        }}
        chilClassName="gap-4"
        className="max-w-[711px]"
      >
        <BodyText>
          En monoversjon av primærlogoen brukes der det ikke er mulig å bruke logoen i farge, og på
          bakgrunner hvor logoen ellers ikke ville vært synlig nok, slik som på en sterk farge eller
          et bilde. Den brukes også når logoen ikke skal være så fremtredende. Monoversjon brukes
          typisk på bokomslag.
        </BodyText>

        <Image
          src={
            "https://dam-p-gyldendal.pqcloud.eu/authkey/1SPXN8IAAG/preview/BssOkfJ8qo8BPiPoPP7Xdf/previews/maxWidth_1600_maxHeight_1600.jpg/*/Logovarianter_preview.jpg?_=1"
          }
          width={711}
          height={355}
          className="object-contain"
          alt="Logo"
        />
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Emblemvariant",
          ingress:
            "Emblemversjonen av logoen brukes kun når Gyldendal selv er hovedfokuset i et budskap. Den er best egnet når den står helt for seg selv på en flate. ",
        }}
        chilClassName="gap-4"
        className="max-w-[711px]"
      >
        <BodyText>
          Dette er en sekundærlogo og skal generelt ikke brukes på produkter. Den finnes også i
          fargevariantene  positiv, negativ og monoversjon. Se kontaktsiden om du er usikker på om
          du bør bruke primær- eller sekundærlogo i en viss kontekst.
        </BodyText>

        <Image
          src={
            "https://dam-p-gyldendal.pqcloud.eu/authkey/1SPXN8IAAG/preview/EDeopuWia6SBwPNXiUwGfd/previews/maxWidth_1600_maxHeight_1600.jpg/*/Emblemvarianter_preview.jpg?_=1"
          }
          width={711}
          height={355}
          className="object-contain"
          alt="Logo"
        />
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Luft og størrelse",
          ingress:
            "Logoen må ha tilstrekkelig rom rundt seg for å kunne stå ut. Om du skal plassere logoen utenom et malverk, skal andre objekter plasseres utenfor klaringen som vist ved siden av. For digitale flater vil det finnes faste størrelsesenheter for luft som skal benyttes tilgjengelig via designverktøy og kode.",
        }}
        chilClassName="gap-4"
        className="max-w-[711px]"
      >
        <BodyText>
          Logoen skal alltid være leselig og synlig. Derfor skal den ikke brukes i mindre størrelse
          enn det som er definert under.
        </BodyText>

        <Image
          src={
            "https://dam-p-gyldendal.pqcloud.eu/authkey/chjI47R7Ug/preview/7QMhG4Do4FMAPwZw2hsz8W/previews/maxWidth_1600_maxHeight_1600.jpg/*/Prim%C3%A6rlogo_preview.jpg?_=1"
          }
          width={711}
          height={355}
          className="object-contain"
          alt="Logo"
        />
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Logoikon",
          ingress:
            "Ikonet brukes alene kun i tilfeller der det ikke er plass til hele logoen, slik som i profilbilde på sosiale medier-kontoer eller som favorittikon i nettleser. ",
        }}
        chilClassName="gap-4"
        className="max-w-[711px]"
      >
        <BodyText>
          Ikonet er tilgjengelig for å fungere både i sirkel og kvadrat. Det skal ikke lages opp
          egne oppsett eller fargekombinasjoner for ikon, men brukes samme ikon på tvers av alle
          kontoer for å sikre et helhetlig utrykk.
        </BodyText>

        <Image
          src={
            "https://dam-p-gyldendal.pqcloud.eu/authkey/chjI47R7Ug/preview/7QMhG4Do4FMAPwZw2hsz8W/previews/maxWidth_1600_maxHeight_1600.jpg/*/Prim%C3%A6rlogo_preview.jpg?_=1"
          }
          width={711}
          height={355}
          className="object-contain"
          alt="Logo"
        />
      </ContentSection>

      <ContentSection textCollection={{ heading: "Unngå dette" }}>
        <div className="h-320 rounded-16 relative max-w-full overflow-hidden">
          <Image src={placeholderImageUrl({})} fill className="object-cover" alt="Logo" />
        </div>
      </ContentSection>
    </SectionLayout>
  )
}
