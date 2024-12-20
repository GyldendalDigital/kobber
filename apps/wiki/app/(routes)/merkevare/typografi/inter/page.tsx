import { InterTypography } from "@/data/typography"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { HeroImage } from "@/components/hero-image"
import { SectionLayout } from "@/components/section-layout"
import { TypographyList } from "@/components/typography-list"
import { metaBrandTypographyInter } from "./inter.meta"

export const metadata = metaBrandTypographyInter

export default function InterPage() {
  return (
    <SectionLayout>
      <HeroImage src={damUrl("Exu0-ZEMqHz97PTPyNXbA2", ".svg")} />
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
        <p>
          Dette er en funksjonell font med lite identitet, og er optimal for bruk på tekster ment
          for mengdelesing i brukergrensesnitt, for eksempel i læringssituasjoner. Den skal aldri
          brukes på markedsflater.
        </p>
      </KobberTextWrapper>
      <TypographyList items={InterTypography} fontClassName="font-inter" />
    </SectionLayout>
  )
}
