import { InterTypography } from "@/data/typography"
import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { Heading } from "@/components/heading"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { TypographyList } from "@/components/typography-list"
import { metaBrandTypographyInter } from "./inter.meta"

export const metadata = metaBrandTypographyInter

export default function InterPage() {
  return (
    <SectionLayout>
      <HeroImage src={damUrl("Exu0-ZEMqHz97PTPyNXbA2", ".svg")} />
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
        <p>
          Dette er en funksjonell font med lite identitet, og er optimal for bruk på tekster ment
          for mengdelesing i brukergrensesnitt, for eksempel i læringssituasjoner. Den skal aldri
          brukes på markedsflater.
        </p>
      </ArticleWrapper>
      <TypographyList items={InterTypography} fontClassName="font-inter" />
    </SectionLayout>
  )
}
