import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";

export default function TypografiPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Typografi"
        subheading="Vårt typografiske system skal håndtere hele Gyldendals bredde av ulike sjangere og formater. "
        ingress="Typografien skal sikre gjenkjennelighet for merkevaren og stå seg like godt på det analoge som på det digitale. Kombinasjonen av en leken og moderne primærfont i PP Mori, og en moderne tolkning av en klassisk serif i Lyon Display, gjør at vi forener tradisjon og innovasjon på en varm og uhøytidelig måte."
      />
    </SectionLayout>
  );
}
