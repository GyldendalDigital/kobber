import { PPMoriTypography } from "@/data/typography"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { ContentLayout } from "@/components/content-layout"
import { HeroImage } from "@/components/hero-image"
import { TypographyList } from "@/components/typography-list"
import { metaBrandTypographyMori } from "./mori.meta"

export const metadata = metaBrandTypographyMori

export default function PPMoriPage() {
  return (
    <ContentLayout>
      <HeroImage src={damUrl("AGyvV5YIaUQ9v0MMHWgzOA", ".svg")} alt="PP Mori eksempeltegn" />
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
        <p>
          Samtidig som den har et moderne grotesk uttrykk, har PP Mori også flere karakteristikker
          som gjør skriften vennlig og uhøytidelig. Fonten bygger sin identitet rundt bokstaven G og
          sine overdrevne diakritiske tegn, og den kraftige avrundingen i G-versalen spiller godt
          sammen med Gyldendals andre identitetsbærende visuelle grep. F-minuskelen gir et lite hint
          til det digitale.
          <br />
          <br />I vanlig typografisk bruk er det lov å benytte seg av vektene fra Light til Bold,
          men Regular, Book og Semi Bold er de mest brukte vektene. Til bruk i logoen benyttes
          variabelvekting.
          <br />
          <br />
          Ved bruk av PP Mori kreves det lisens som man må søke tilgang om. Kontakt oss ved behov.
          Bruk Arial i presentasjoner og dokumenter.
        </p>
      </KobberTextWrapper>
      <TypographyList items={PPMoriTypography} fontClassName="font-mori" />
    </ContentLayout>
  )
}
