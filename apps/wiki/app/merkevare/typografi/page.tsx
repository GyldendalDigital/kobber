import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils";
import { FeatureBoxType, PageDetails } from "@/types/types";
import { Metadata } from "next";
import { pageDetailsPP } from "./pp-mori/page";
import { pageDetailsLyon } from "./lyon/page";
import { pageDetailsInter } from "./inter/page";
import { pageDetailsRetningslinjer } from "./retningslinjer/page";

export const pageDetailsTypografi: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Typografi",
  image: placeholderImageUrl({}),
  children: [pageDetailsPP, pageDetailsLyon, pageDetailsInter, pageDetailsRetningslinjer],
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsTypografi.title),
  description:
    "Typografien skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og innovasjon på en varm og uhøytidelig måte.",
};

const url = "/merkevare/typografi";

const featureItems: FeatureBoxType[] = [
  { title: "Primærfont: PP Mori", href: `${url}/pp-mori`, image: placeholderImageUrl({}) },
  { title: "Sekunærfont: Lyon", href: `${url}/lyon`, image: placeholderImageUrl({}) },
  { title: "UI Font: Inter", href: `${url}/inter`, image: placeholderImageUrl({}) },
  { title: "Retningslinjer", href: `${url}/retningslinjer`, image: placeholderImageUrl({}) },
];

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
  );
}
