import { FeatureBoxType, PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"
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

const url = "/merkevare/typografi"

const featureItems: FeatureBoxType[] = [
  { title: "Primærfont: PP Mori", href: `${url}/pp-mori`, image: placeholderImageUrl({}) },
  { title: "Sekunærfont: Lyon", href: `${url}/lyon`, image: placeholderImageUrl({}) },
  { title: "UI Font: Inter", href: `${url}/inter`, image: placeholderImageUrl({}) },
]

export default function TypografiPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Typografi"
        subheading="Vårt typografiske system skal håndtere hele Gyldendals bredde av ulike sjangere og formater. "
        ingress="Typografien skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og innovasjon på en varm og uhøytidelig måte."
      />

      <FeatureBoxGrid items={featureItems} />
    </SectionLayout>
  )
}
