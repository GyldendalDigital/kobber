import { PPMoriTypography } from "@/data/typography"
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
  title: "PP Mori",
  image: damImageUrl("2EyeCFedaTx9HKSLc9MOEL", ".svg"),
  description:
    "PP Mori er Gyldendals identitetsbærende hovedskrift og benyttes i Gyldendal på alle nivåer i vår kommunikasjon - fra logoer til overskrifter, brødtekst og fotnoter.",
}

export default function PPMoriPage() {
  return (
    <SectionLayout>
      <HeroImage src={damImageUrl("AGyvV5YIaUQ9v0MMHWgzOA", ".svg")} />
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
        <p>
          Samtidig som den har et moderne grotesk uttrykk, har PP Mori også flere karakteristikker
          som gjør skriften vennlig og uhøytidelig. Fonten bygger sin identitet rundt bokstaven G og
          sine overdrevne diakritiske tegn, og den kraftige avrundingen i G-versalen spiller godt
          sammen med Gyldendals andre identitetsbærende visuelle grep. F-minuskelen gir et lite hint
          til det digitale. I vanlig typografisk bruk er det lov å benytte seg av vektene fra Light
          til Bold, men Regular, Book og Semi Bold er de mest brukte vektene. Til bruk i logoen
          benyttes variabelvekting.
        </p>
      </ArticleWrapper>
      <TypographyList items={PPMoriTypography} fontClassName="font-mori" />
    </SectionLayout>
  )
}
