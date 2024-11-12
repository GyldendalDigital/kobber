import { LyonTypography } from "@/data/typography"
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
  title: "Lyon Display",
  image: damImageUrl("DthsF6rXaovA8F7r_pJR0x", ".svg"),
  description:
    "Lyon Display er en kontemporær tilnærming til en tradisjonell skriftstil, og fungerer som et mer emosjonelt og elegant supplement til primærskriften PP Mori.",
}

export default function LyongPage() {
  return (
    <SectionLayout>
      <HeroImage src={damImageUrl("By9O98egq-FBEgC3t7Ek6L", ".svg")} />
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
        <p>
          Står den alene brukes brukes fonten hovedsakelig til sitater og mer emosjonelle budskap.
          Kombinert med PP Mori brukes den som kontrast i redaksjonelle overskrifter og for å legge
          trykk på enkelte ord. Lyon Display skal ikke overbrukes, men heller brukes der den gir
          effekt. Om du er usikker på når du skal bruke fonten i en kontekst; se kontaktsiden.
        </p>
      </ArticleWrapper>
      <TypographyList items={LyonTypography} />
    </SectionLayout>
  )
}
