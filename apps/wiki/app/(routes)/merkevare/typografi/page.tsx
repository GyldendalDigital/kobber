import {
  pageBrandTypographyArial,
  pageBrandTypographyInter,
  pageBrandTypographyLyon,
  pageBrandTypographyMori,
} from "@/lib/metadata.pages"
import { pageMetadata } from "@/lib/metadata.utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export const metadata = pageMetadata(import.meta.url, {
  title: "Typografi",
  image: pageBrandTypographyMori.image,
  children: [
    pageBrandTypographyMori,
    pageBrandTypographyLyon,
    pageBrandTypographyInter,
    pageBrandTypographyArial,
  ],
  description:
    "Vårt typografiske system skal håndtere hele Gyldendals bredde av ulike sjangere og formater.",
})

export default function TypografiPage() {
  return (
    <SectionLayout>
      <div>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
        <Body>
          Typografien skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge
          som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en
          moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og
          innovasjon på en varm og uhøytidelig måte.
        </Body>
      </div>

      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
