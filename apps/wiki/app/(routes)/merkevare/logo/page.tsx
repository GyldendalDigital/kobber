import Image from "next/image"
import Link from "next/link"
import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { IconExternalLink } from "@/components/kobber-icons"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandLogo } from "./logo.meta"

export const metadata = metaBrandLogo

export default function Page() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <h2 className="text-[48px] text-[#691837]">Gyldendal Logo</h2>
        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>

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

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Primærlogo</h5>
        <Body>
          Gyldendals primærlogo skal brukes i de fleste tilfeller.
          <br />
          <br />
          Den består av logosymbolet som er basert på en norsk gran, samt navnet skrevet i små
          bokstaver, unntatt G-en. Fonten sikrer en god balanse mellom gjenkjennelighet og
          anvendelighet, slik at fonten også kan benyttes i logoer på Gyldendals støttede
          identiteter. Gyldendal har et visuelt distinkt navn slik det skrives ut, og dette benytter
          logoen for å bygge mer gjenkjennelighet i ulike kontekster. Fargen fremstår varm og
          vennlig.
        </Body>
        <Image
          src={damUrl("7QMhG4Do4FMAPwZw2hsz8W")}
          width={711}
          height={355}
          className="object-contain"
          alt="Gyldendals primærlogo"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Fargevarianter</h5>
        <Body>
          Gyldendals primærlogo kan brukes i en positiv og en negativ variant. Den positive
          varianten brukes på lys bakgrunn og den negative brukes på mørk bakgrunn.
          <br />
          <br />
          En monoversjon av primærlogoen brukes der det ikke er mulig å bruke logoen i farge, og på
          bakgrunner hvor logoen ellers ikke ville vært synlig nok, slik som på en sterk farge eller
          et bilde. Den brukes typisk på bokomslag.
        </Body>

        <Image
          src={damUrl("BssOkfJ8qo8BPiPoPP7Xdf")}
          width={711}
          height={355}
          className="object-contain"
          alt="Gyldendal-logoen i forskjellige fargevarianter"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Emblemvariant</h5>
        <Body>
          Emblemversjonen av logoen brukes kun når Gyldendal selv er hovedfokuset i et budskap. Den
          er best egnet når den står helt for seg selv på en flate.
          <br />
          <br />
          Dette er en sekundærlogo og skal generelt ikke brukes på produkter. Den finnes også i
          fargevariantene positiv, negativ og monoversjon.
        </Body>

        <Image
          src={damUrl("EDeopuWia6SBwPNXiUwGfd")}
          width={711}
          height={355}
          className="object-contain"
          alt="Gyldendal-emblemet i forskjellige fargevarianter"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Størrelse</h5>
        <Body>
          Logoen skal alltid være leselig og synlig. Derfor skal den ikke brukes i mindre størrelse
          enn det som er definert under.
        </Body>

        <Image
          src={damUrl("C7NO6xO94muAODruMvqz6X")}
          width={711}
          height={355}
          className="object-contain"
          alt="Størrelser på logo og emblem"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Luft</h5>
        <Body>
          Logoen må ha tilstrekkelig rom rundt seg for å kunne stå ut. Om du skal plassere logoen
          utenom et malverk, skal andre objekter plasseres utenfor klaringen som vist ved siden av.
          For digitale flater vil det finnes faste størrelsesenheter for luft som skal benyttes
          tilgjengelig via designverktøy og kode.
        </Body>

        <Image
          src={damUrl("4MKJoFbQqlQ8bHzRZ_Wr5I")}
          width={711}
          height={355}
          className="object-contain"
          alt="Logoen skal helst ha to liggende G-er i luft rundt seg"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Logoikon</h5>
        <Body>
          Ikonet brukes alene kun i tilfeller der det ikke er plass til hele logoen, slik som i
          profilbilde på sosiale medier-kontoer eller som favorittikon i nettleser. 
          <br />
          <br />
          Ikonet er tilgjengelig for å fungere både i sirkel og kvadrat. Det skal ikke lages opp
          egne oppsett eller fargekombinasjoner for ikon, men brukes samme ikon på tvers av alle
          kontoer for å sikre et helhetlig utrykk.
        </Body>
        <div className="grid grid-cols-2 gap-[14px]">
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
      </ArticleWrapper>
      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Unngå dette</h5>

        <Image
          src={damUrl("24qUgPLAKGABtj9kD1cubQ", ".svg")}
          width={711}
          height={650}
          className="object-contain"
          alt="Unngå omarrangerte elementer, utelatte elementer, endret farge, effekter som f.eks. skygge, egne varianter, og rotasjon av logo"
        />
      </ArticleWrapper>
    </SectionLayout>
  )
}
