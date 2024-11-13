import { PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { HeroImage } from "@/components/hero-image"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Arial",
  image: damImageUrl("2ORx4_83KjR9VhrWckk2iZ", ".svg"),
  description:
    "Systemfonten Arial brukes i tilfeller hvor identitetsfonten PP Mori ikke er tilgjengelig. Dette er en font som ikke krever nedlastning og bruken av den sikrer et konsistent utrykk i dokumenter og filer som deles hyppig.",
}

export default function arialPage() {
  return (
    <SectionLayout>
      <HeroImage src={damImageUrl("4RX2rrxwaN08pAa_b1iyQu", ".svg")} />
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
