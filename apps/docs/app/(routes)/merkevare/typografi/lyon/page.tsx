import { LyonTypography } from "@/data/typography"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { ContentLayout } from "@/components/content-layout"
import { RouterTextLink } from "@/components/global/router-link"
import { HeroImage } from "@/components/hero-image"
import { TypographyList } from "@/components/typography-list"
import { metaGettingStartedContact } from "@/app/(routes)/kom-i-gang/kontakt/contact.meta"
import { metaBrandTypographyArial } from "../arial/arial.meta"
import { metaBrandTypographyLyon } from "./lyon.meta"

export const metadata = metaBrandTypographyLyon

export default function LyongPage() {
  return (
    <ContentLayout>
      <HeroImage src={damUrl("By9O98egq-FBEgC3t7Ek6L", ".svg")} />
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
        <p>
          Står den alene brukes brukes fonten hovedsakelig til sitater og mer emosjonelle budskap.
          Kombinert med PP Mori brukes den som kontrast i redaksjonelle overskrifter og for å legge
          trykk på enkelte ord.
        </p>
        <p>
          Lyon Display skal ikke overbrukes, men heller brukes der den gir effekt. Om du er usikker
          på når du skal bruke fonten i en kontekst; se{" "}
          <RouterTextLink href={metaGettingStartedContact.href}>kontaktsiden</RouterTextLink>.
        </p>
        <p>
          Ved bruk av Lyon Display kreves det lisens som man må søke tilgang om. Kontakt oss ved
          behov. Bruk <RouterTextLink href={metaBrandTypographyArial.href}>Arial</RouterTextLink> i
          presentasjoner og dokumenter.
        </p>
      </KobberTextWrapper>
      <TypographyList items={LyonTypography} fontClassName="font-lyon" />
    </ContentLayout>
  )
}
