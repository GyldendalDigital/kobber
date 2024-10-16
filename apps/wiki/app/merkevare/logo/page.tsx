import Image from "next/image"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { BodyText } from "@/components/body-text"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

const gyldendalLogo =
  "https://s3-alpha-sig.figma.com/img/995f/2000/434978cf1eb4828e211090b46cf349ff?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYQy2rC9YVbjitRFdr736gTCsVu9bBcJZqwj5fo7LvGr06EyYxUYk7hhZIZjO2qfJB1D9ESqn09lV3JIkHmz~vTslHvlWBKAfjVZRc0BPjSBQ0DRgHkNN2SRKRgd7rnEjKjZ4uXxQrTkwhNAJj4iMDBx9Zc2MHqgQnJkyakSL4XWG9rfVuq8PKe3qhgW4Q1uAJzFFzyJlGbRkTC967aAe2X5Ss9~lMYsT1oXK3c6MnmS9fEjwkggMyfW5fRtySPNnkiZPtO4YZtnotT6Ns08OFaJ0K4xkchxKxMwV0JSTAqy2w5JQr3qfbJiGuGW2hS55tIqTKbS-XUTHJ4XvEYr-w__"

const fourGyldendalLogos =
  "https://s3-alpha-sig.figma.com/img/b7e8/cee9/e0da053d9ddfd63ffd5972cf37ec8501?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TNO~MlokOcKmPd7~fDHahGwHiV5NCN5APvQ47HJzTsYmFAYHtBIbHUb-Oe8GPmS5EqV4ZZNHG54TYNRfW4MmHhMwfn6VShEGh5ObbxPNH1ZLfMEYeguE0THa7ff-V3sLPWqY4aVnmp-glE2qtOYPWq4AX4FNpULLct3CynfrBvRYy9WNAoaxhWlSmSV2ejeLizu2ovIIgqmYUHAN23x-S-TGQCwiLhp0S3mcu6efBOrzX4QFx-QY5AyxQ1H0dGJkXEuiX7LuO0Qtw~SeP1j-stK0obPNXSP8YQYMUd~KowM0LZ23Oij-JdX2rgJ13dXR69HR3Vhfrn4RsRFdwlCmOw__"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Logo",
  image: placeholderImageUrl({}),
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
      >
        <BodyText>
          Den består av logosymbolet som er basert på en norsk gran, samt navnet skrevet i små
          bokstaver, unntatt G-en. Fonten sikrer en god balanse mellom gjenkjennelighet og
          anvendelighet, slik at fonten også kan benyttes i logoer på Gyldendals støttede
          identiteter. Gyldendal har et visuelt distinkt navn slik det skrives ut, og dette benytter
          logoen for å bygge mer gjenkjennelighet i ulike kontekster. Fargen fremstår varm og
          vennlig.
        </BodyText>

        <div className="relative h-320 max-w-full overflow-hidden rounded-16">
          <Image src={gyldendalLogo} fill className="object-cover" alt="Logo" />
        </div>
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Fargevarianter",
          ingress:
            "Gyldendals primærlogo kan brukes i en positiv og en negativ variant. Den positive varianten brukes på lys bakgrunn og den negative brukes på mørk bakgrunn.",
        }}
      >
        <BodyText>
          En monoversjon av primærlogoen brukes der det ikke er mulig å bruke logoen i farge, og på
          bakgrunner hvor logoen ellers ikke ville vært synlig nok, slik som på en sterk farge eller
          et bilde. Den brukes også når logoen ikke skal være så fremtredende. Monoversjon brukes
          typisk på bokomslag.
        </BodyText>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={fourGyldendalLogos} alt="Logoer" />
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Emblemvariant",
          ingress:
            "Emblemversjonen av logoen brukes kun når Gyldendal selv er hovedfokuset i et budskap. Den er best egnet når den står helt for seg selv på en flate, og skal generelt ikke brukes på produkter. Den finnes også i fargevariantene positiv, negativ og monoversjon.",
        }}
      >
        <BodyText>
          Se kontaktsiden om du er usikker på om du bør bruke primær- eller sekundærlogo i en viss
          kontekst.
        </BodyText>

        <div className="relative h-320 max-w-full overflow-hidden rounded-16">
          <Image src={gyldendalLogo} fill className="object-cover" alt="Logo" />
        </div>
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Luft og størrelse",
          ingress:
            "Logoen må ha tilstrekkelig rom rundt seg for å kunne stå ut. Om du skal plassere logoen utenom et malverk, skal andre objekter plasseres utenfor klaringen som vist ved siden av. For digitale flater vil det finnes faste størrelsesenheter for luft som skal benyttes tilgjengelig via designverktøy og kode.",
        }}
      >
        <BodyText>
          Logoen skal alltid være leselig og synlig. Derfor skal den ikke brukes i mindre størrelse
          enn det som er definert under.
        </BodyText>

        <div className="relative h-320 max-w-full overflow-hidden rounded-16">
          <Image src={gyldendalLogo} fill className="object-cover" alt="Logo" />
        </div>
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Logoikon",
          ingress:
            "Ikonet brukes alene kun i tilfeller der det ikke er plass til hele logoen, slik som i profilbilde på sosiale medier-kontoer eller som favorittikon i nettleser. ",
        }}
      >
        <BodyText>
          Ikonet er tilgjengelig for å fungere både i sirkel og kvadrat. Det skal ikke lages opp
          egne oppsett eller fargekombinasjoner for ikon, men brukes samme ikon på tvers av alle
          kontoer for å sikre et helhetlig utrykk.
        </BodyText>

        <div className="relative h-320 max-w-full overflow-hidden rounded-16">
          <Image src={gyldendalLogo} fill className="object-cover" alt="Logo" />
        </div>
      </ContentSection>

      <ContentSection textCollection={{ heading: "Unngå dette" }}>
        <div className="relative h-320 max-w-full overflow-hidden rounded-16">
          <Image src={placeholderImageUrl({})} fill className="object-cover" alt="Logo" />
        </div>
      </ContentSection>
    </SectionLayout>
  )
}
