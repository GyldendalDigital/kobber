import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { Heading } from "@/components/heading"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandTypographyArial } from "./arial.meta"

export const metadata = metaBrandTypographyArial

export default function arialPage() {
  return (
    <SectionLayout>
      <HeroImage src={damUrl("4RX2rrxwaN08pAa_b1iyQu", ".svg")} />
      <ArticleWrapper>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>

        <ul>
          <p>Arial er tilgjengelig både for PC- og Mac-brukere, og brukes i blant annet:</p>
          <li>- E-post signatur</li>
          <li>- Nyhetsbrev</li>
          <li>- Interne PowerPoint-presentasjoner</li>
          <li>- Interne dokumenter i Word og Excel</li>
          <li>- Fallback font for web</li>
        </ul>
      </ArticleWrapper>
    </SectionLayout>
  )
}
