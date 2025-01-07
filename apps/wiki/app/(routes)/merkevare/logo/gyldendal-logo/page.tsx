import Image from "next/image"
import Link from "next/link"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { IconExternalLink } from "@/components/kobber-icons"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandLogoGyldendal } from "./gyldendalLogo.meta"

export const metadata = metaBrandLogoGyldendal

export default function Page() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      <div className="flex flex-wrap items-center gap-[16px]">
        <Link
          target="_blank"
          href={"https://dam-p-gyldendal.pqcloud.eu/app/#/s/BI54jcT1Vj"}
          className="flex gap-[8px] text-[16px] leading-[1.15] text-link hover:underline"
        >
          Gyldendallogo
          <IconExternalLink />
        </Link>
        <Link
          target="_blank"
          href={"https://dam-p-gyldendal.pqcloud.eu/?w=C7may_WNjE"}
          className="flex gap-[8px] text-[16px] leading-[1.15] text-link hover:underline"
        >
          Logoikon
          <IconExternalLink />
        </Link>
      </div>

      <KobberTextWrapper className="max-w-[711px] gap-0">
        <KobberHeading level="h2" variant="title medium">
          Primærlogo
        </KobberHeading>
        <p>
          Gyldendals primærlogo skal brukes i de fleste tilfeller.
          <br />
          <br />
          Den består av logosymbolet som er basert på en norsk gran, samt navnet skrevet i små
          bokstaver, unntatt G-en. Fonten sikrer en god balanse mellom gjenkjennelighet og
          anvendelighet, slik at fonten også kan benyttes i logoer på Gyldendals støttede
          identiteter. Gyldendal har et visuelt distinkt navn slik det skrives ut, og dette benytter
          logoen for å bygge mer gjenkjennelighet i ulike kontekster. Fargen fremstår varm og
          vennlig.
        </p>
        <Image
          src={damUrl("7QMhG4Do4FMAPwZw2hsz8W")}
          width={711}
          height={355}
          className="object-contain"
          alt="Gyldendals primærlogo"
        />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-0">
        <KobberHeading level="h2" variant="title medium">
          Fargevarianter
        </KobberHeading>
        <p>
          Gyldendals primærlogo kan brukes i en positiv og en negativ variant. Den positive
          varianten brukes på lys bakgrunn og den negative brukes på mørk bakgrunn.
          <br />
          <br />
          En monoversjon av primærlogoen brukes der det ikke er mulig å bruke logoen i farge, og på
          bakgrunner hvor logoen ellers ikke ville vært synlig nok, slik som på en sterk farge eller
          et bilde. Den brukes typisk på bokomslag.
        </p>

        <Image
          src={damUrl("BssOkfJ8qo8BPiPoPP7Xdf")}
          width={711}
          height={355}
          className="object-contain"
          alt="Gyldendal-logoen i forskjellige fargevarianter"
        />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-0">
        <KobberHeading level="h2" variant="title medium">
          Emblemvariant
        </KobberHeading>
        <p>
          Emblemversjonen av logoen brukes kun når Gyldendal selv er hovedfokuset i et budskap. Den
          er best egnet når den står helt for seg selv på en flate.
          <br />
          <br />
          Dette er en sekundærlogo og skal generelt ikke brukes på produkter. Den finnes også i
          fargevariantene positiv, negativ og monoversjon.
        </p>

        <Image
          src={damUrl("EDeopuWia6SBwPNXiUwGfd")}
          width={711}
          height={355}
          className="object-contain"
          alt="Gyldendal-emblemet i forskjellige fargevarianter"
        />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-0">
        <KobberHeading level="h2" variant="title medium">
          Størrelse
        </KobberHeading>
        <p>
          Logoen skal alltid være leselig og synlig. Derfor skal den ikke brukes i mindre størrelse
          enn det som er definert under.
        </p>

        <div className="flex flex-col items-center gap-[46px] md:flex-row md:items-end">
          <Image
            src={damUrl("56ixNHqoaJbAaqY-dib4Xh", ".svg")}
            width={386}
            height={169}
            className="object-contain"
            alt="Størrelse logo"
          />
          <Image
            src={damUrl("70riM5264g-8jPBCRtdZKH", ".svg")}
            width={255}
            height={252}
            className="object-contain"
            alt="Størrelse emblem"
          />
        </div>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-0">
        <KobberHeading level="h2" variant="title medium">
          Luft
        </KobberHeading>
        <p>
          Logoen må ha tilstrekkelig rom rundt seg for å kunne stå ut. Om du skal plassere logoen
          utenom et malverk, skal andre objekter plasseres utenfor klaringen som vist ved siden av.
          For digitale flater vil det finnes faste størrelsesenheter for luft som skal benyttes
          tilgjengelig via designverktøy og kode.
        </p>
        <div className="flex flex-col items-center gap-[46px] md:flex-row md:items-end">
          <Image
            src={damUrl("47FrxqP0q-_9mBciSzeOMu", ".svg")}
            width={377}
            height={194}
            className="object-contain"
            alt="Logoen skal helst ha to liggende G-er i luft rundt seg"
          />
          <Image
            src={damUrl("3_gh5qyyaOnB5UEyZ1esJE", ".svg")}
            width={287}
            height={233}
            className="object-contain"
            alt=""
          />
        </div>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-0">
        <KobberHeading level="h2" variant="title medium">
          Logoikon
        </KobberHeading>
        <p>
          Ikonet brukes alene kun i tilfeller der det ikke er plass til hele logoen, slik som i
          profilbilde på sosiale medier-kontoer eller som favorittikon i nettleser. 
          <br />
          <br />
          Ikonet er tilgjengelig for å fungere både i sirkel og kvadrat. Det skal ikke lages opp
          egne oppsett eller fargekombinasjoner for ikon, men brukes samme ikon på tvers av alle
          kontoer for å sikre et helhetlig utrykk.
        </p>
        <div className="flex flex-col items-center justify-center gap-[14px] md:grid md:grid-cols-2">
          <Image
            src={damUrl("84FY3H2XKB58UxQvEd77GH")}
            width={335}
            height={326}
            className="rounded-[8px] object-contain"
            alt="Kun logo, uten Gyldendal-navnet"
          />
          <Image
            src={damUrl("2Ouy_3zQKR5A62Q3En4rPb")}
            width={335}
            height={326}
            className="rounded-[8px] object-contain"
            alt="Gyldendal på Facebook"
          />
          <Image
            src={damUrl("16nZGiVba9ABfrDKvw-BPV")}
            width={335}
            height={326}
            className="rounded-[8px] object-contain"
            alt="Gyldendal story"
          />
          <Image
            src={damUrl("AVedawD5qbj8x0ldR7qLNu")}
            width={335}
            height={326}
            className="rounded-[8px] object-contain"
            alt="Gyldendal på Instagram"
          />
        </div>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <KobberHeading level="h2" variant="title medium">
          Unngå dette
        </KobberHeading>

        <div className="flex flex-col items-center justify-center gap-[14px] md:grid md:grid-cols-2">
          <Image
            src={damUrl("0io5B1AbazcAvYsR1sG4PO", ".svg")}
            width={342}
            height={196}
            className="rounded-[8px] object-contain"
            alt="Ikke omarranger elementer"
          />
          <Image
            src={damUrl("1llKecD-KZ2ABnECzqoFmg", ".svg")}
            width={342}
            height={196}
            className="rounded-[8px] object-contain"
            alt="Ikke utelat elementer"
          />
          <Image
            src={damUrl("08SKhqul4FR8rIkqQcm9lT", ".svg")}
            width={342}
            height={196}
            className="rounded-[8px] object-contain"
            alt="Ikke legg ti leffekter"
          />
          <Image
            src={damUrl("0eH7XijWasH9V9JMxFXUSI", ".svg")}
            width={342}
            height={196}
            className="rounded-[8px] object-contain"
            alt="Ikke endre fargene"
          />
          <Image
            src={damUrl("2Vho9BmH4829E4Q4SazF8L", ".svg")}
            width={342}
            height={196}
            className="rounded-[8px] object-contain"
            alt="Ikke lag logovarianter"
          />
          <Image
            src={damUrl("Ffy6D_C5alVBxZE7klVO__", ".svg")}
            width={342}
            height={196}
            className="rounded-[8px] object-contain"
            alt="Ikke roter vinkelen"
          />
        </div>
      </KobberTextWrapper>
    </SectionLayout>
  )
}
