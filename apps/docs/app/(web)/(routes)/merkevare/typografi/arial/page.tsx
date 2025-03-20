import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { ContentLayout } from "@/components/content-layout"
import { HeroImage } from "@/components/hero-image"
import { metaBrandTypographyArial } from "./arial.meta"

export const metadata = metaBrandTypographyArial

export default function arialPage() {
  return (
    <ContentLayout>
      <HeroImage src={damUrl("4RX2rrxwaN08pAa_b1iyQu", ".svg")} />
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>

        <p>Arial er tilgjengelig både for PC- og Mac-brukere, og brukes i blant annet:</p>
        <ul>
          <li>- E-post signatur</li>
          <li>- Nyhetsbrev</li>
          <li>- Interne PowerPoint-presentasjoner</li>
          <li>- Interne dokumenter i Word og Excel</li>
          <li>- Fallback font for web</li>
        </ul>
      </KobberTextWrapper>
    </ContentLayout>
  )
}
