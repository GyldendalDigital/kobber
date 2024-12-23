import Image from "next/image"
import Link from "next/link"
import {
  KobberHeading,
  KobberIngress,
  KobberTextHighlight,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { BRANDING_MANUAL_URL, KOBBER_TEAMS_URL } from "@/lib/constants"
import { damUrl } from "@/lib/damImageLoader"
import { ExternalLinksGrid } from "@/components/global/external-links-grid"
import { SectionLayout } from "@/components/section-layout"
import { SubHeading } from "@/components/sub-heading"
import { metaGettingStartedHow } from "./how.meta"

export const metadata = metaGettingStartedHow

export default function HvordanBrukeKobber() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px]">
        <SubHeading>Et felles system</SubHeading>

        <p>
          <KobberTextHighlight>Verktøykassa</KobberTextHighlight> vår skal kunne brukes på tvers av
          virksomhetene våre, samt kunne utvides og tilpasses etter behov. Det er et kontinuerlig
          arbeid hvor alle som er brukere av systemet også bidrar til det.
          <br />
          <br />
          Beskrivelser og retningslinjer for hvordan vi skal bruke merkevaren og designsystemet vår
          finnes i{" "}
          <Link className="underline" href={BRANDING_MANUAL_URL} target="_blank">
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
      </KobberTextWrapper>
      <KobberTextWrapper className="max-w-[711px]">
        <SubHeading>Slik er Kobber satt sammen</SubHeading>
        <Image
          src={damUrl("6atgf4QHaSg9sFEJKBk8s9", ".svg")}
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
      </KobberTextWrapper>
      <ExternalLinksGrid />
    </SectionLayout>
  )
}
