import Link from "next/link"
import { LyonTypography } from "@/data/typography"
import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { Heading } from "@/components/heading"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { TypographyList } from "@/components/typography-list"
import { metaGettingStartedContact } from "@/app/(routes)/kom-i-gang/kontakt/contact.meta"
import { metaBrandTypographyArial } from "../arial/arial.meta"
import { metaBrandTypographyLyon } from "./lyon.meta"

export const metadata = metaBrandTypographyLyon

export default function LyongPage() {
  return (
    <SectionLayout>
      <HeroImage src={damUrl("By9O98egq-FBEgC3t7Ek6L", ".svg")} />
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
        <p>
          Står den alene brukes brukes fonten hovedsakelig til sitater og mer emosjonelle budskap.
          Kombinert med PP Mori brukes den som kontrast i redaksjonelle overskrifter og for å legge
          trykk på enkelte ord.
          <br />
          <br />
          Lyon Display skal ikke overbrukes, men heller brukes der den gir effekt. Om du er usikker
          på når du skal bruke fonten i en kontekst; se{" "}
          <Link href={metaGettingStartedContact.href} className="underline">
            kontaktsiden
          </Link>
          .
          <br />
          <br />
          Ved bruk av Lyon Display kreves det lisens som man må søke tilgang om. Kontakt oss ved
          behov. Bruk{" "}
          <Link href={metaBrandTypographyArial.href} className="underline">
            Arial
          </Link>{" "}
          i presentasjoner og dokumenter.
        </p>
      </ArticleWrapper>
      <TypographyList items={LyonTypography} fontClassName="font-lyon" />
    </SectionLayout>
  )
}
