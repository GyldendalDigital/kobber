import { ColorBlockGrid } from "@/components/color-block-grid";
import { ContentSection } from "@/components/content-section";
import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { UIColors } from "@/data/color-palettes";

export default function UiFarger() {
  return (
    <SectionLayout>
      <TextCollection
        heading="UI-farger"
        ingress="Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som skal kommunisere til sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral palett."
      />

      {UIColors.map((theme, index) => (
        <ContentSection heading={theme.title} key={index}>
          <ColorBlockGrid colors={theme.colors} />
        </ContentSection>
      ))}
    </SectionLayout>
  );
}
