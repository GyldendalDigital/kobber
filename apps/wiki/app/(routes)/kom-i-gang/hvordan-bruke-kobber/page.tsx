import Image from "next/image"
import Link from "next/link"
import { PageDetails } from "@/types/types"
import { KOBBER_TEAMS_URL } from "@/lib/constants"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { IconExternalLink } from "@/components/kobber-icons"
import { SectionLayout } from "@/components/section-layout"
import { SubHeading } from "@/components/sub-heading"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Hvordan bruke Kobber",
  image: placeholderImageUrl({}),
  description:
    "Denne nettsiden kan sees på som Gyldendals oppslagsverk for merkevare og designsystem. Her samles all informasjon slik at vi har en felles kilde med eksempler og retningslinjer vi kan følge.",
}

const merkevare_manual_url =
  "https://dam-p-gyldendal.pqcloud.eu/app/#/search//name/?path=%22%5CKobber%5CDesign-og-merkevaremanual%22&enableAssetsOfCollections=false&showAssetsOfSubfolders=true&showSubCollections=false"

export default function HvordanBrukeKobber() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <SubHeading>Et felles system</SubHeading>

        <p>
          Verktøykassa vår skal kunne brukes på tvers av virksomhetene våre, samt kunne utvides og
          tilpasses etter behov. Det er et kontinuerlig arbeid hvor alle som er brukere av systemet
          også bidrar til det.
          <br />
          <br />
          Beskrivelser og retningslinjer for hvordan vi skal bruke merkevaren og designsystemet vår
          finnes i{" "}
          <Link className="underline" href={merkevare_manual_url} target="_blank">
            merkevaremanualen
          </Link>{" "}
          og på denne nettsiden.
          <br />
          <br />
          Husk å følge med på oppdateringer på denne siden samt vår{" "}
          <Link href={KOBBER_TEAMS_URL} className="underline" target="_blank">
            teams-kanal
          </Link>{" "}
          der det kan komme felles beskjeder og er åpent for spørsmål.
        </p>
      </ArticleWrapper>
      <ArticleWrapper className="max-w-[711px]">
        <SubHeading>Slik er Kobber satt sammen</SubHeading>
        <Image
          src={damImageUrl("6atgf4QHaSg9sFEJKBk8s9", ".svg")}
          width={711}
          height={355}
          className="object-contain"
          alt="Forklaringsbilde av Kobber"
        />
        <p>
          Vi tar i bruk tjenesten DAM (Digital Asset Management) som felles kilde til oppdaterte
          originalfiler av identitetselementer som logo, bilder og illustrasjoner. Dette gjør at vi
          har kontroll på versjonshåndtering, og deling av logofiler via Teams, Slack eller e-post
          er derfor ikke ønskelig.
        </p>
        <p>
          Merkevarestrategien, visuell identitet og digitalt komponentbibliotek vil rulles ut
          gradvis. Flere malverk og retningslinjer vil bli tilgjengelige i senere versjoner av
          Kobber. Designere, utviklere og markedsførere får løpende tilgang til relevante malverk i
          sine arbeidsverktøy som kode, Figma og Adobe.
        </p>
      </ArticleWrapper>
      <section className="grid gap-y-section/gap/horizontal">
        <ul className="flex flex-wrap items-center gap-[16px]">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                target="_blank"
                href={item.href}
                className="text-link flex gap-[8px] text-[16px] leading-[1.15] hover:underline"
              >
                {item.title}
                <IconExternalLink />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SectionLayout>
  )
}

const links = [
  {
    title: "Merkevaremanual",
    href: merkevare_manual_url,
  },
  {
    title: "Gyldendal logo",
    href: merkevare_manual_url,
  },
  {
    title: "Ikonetsett",
    href: "https://dam-p-gyldendal.pqcloud.eu/app/#/search//name/?path=%22%5CKobber%5CDokumentasjon%5CLogo%22&enableAssetsOfCollections=false&showAssetsOfSubfolders=true&showSubCollections=false",
  },

  {
    title: "Kobber i Teams",
    href: KOBBER_TEAMS_URL,
  },
  {
    title: "Kobber i Slack",
    href: "https://dam-p-gyldendal.pqcloud.eu/app/#/search//name/?path=%22%5CKobber%5CDokumentasjon%5CLogo%22&enableAssetsOfCollections=false&showAssetsOfSubfolders=true&showSubCollections=false",
  },
]
