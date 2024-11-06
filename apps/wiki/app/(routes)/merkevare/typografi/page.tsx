import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metadata as merkevareTypografiInterPage } from "./inter/page"
import { metadata as merkevareTypografiLyonPage } from "./lyon/page"
import { metadata as merkevareTyopgrafiPPMoriPage } from "./pp-mori/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Typografi",
  image: placeholderImageUrl({}),
  children: [merkevareTyopgrafiPPMoriPage, merkevareTypografiLyonPage, merkevareTypografiInterPage],
  description:
    "Typografien skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og innovasjon på en varm og uhøytidelig måte.",
}

export default function TypografiPage() {
  return (
    <SectionLayout>
      <div>
        <Heading text={metadata.title as string} />

        <Ingress>
          Vårt typografiske system skal håndtere hele Gyldendals bredde av ulike sjangere og
          formater.
        </Ingress>
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
