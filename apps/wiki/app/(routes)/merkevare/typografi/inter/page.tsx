import { InterTypography } from "@/data/typography"
import { PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { TypographyList } from "@/components/typography-list"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Inter",
  image: damImageUrl("CVfEZzAPqUGASn21lmiGDZ", ".svg"),
  description:
    "Inter er en open source-font som brukes på komponenter i brukergrensesnitt, og i digitale tekster hvor det finnes pedagogiske behov for ulike varianter av bokstaver og tegn.",
}

export default function InterPage() {
  return (
    <SectionLayout>
      <HeroImage src={damImageUrl("Exu0-ZEMqHz97PTPyNXbA2", ".svg")} />
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
        <p>
          Dette er en funksjonell font med lite identitet, og er optimal for bruk på tekster ment
          for mengdelesing i brukergrensesnitt, for eksempel i læringssituasjoner. Den skal aldri
          brukes på markedsflater.
        </p>
      </ArticleWrapper>
      <TypographyList items={InterTypography} />
    </SectionLayout>
  )
}
