import { ColorBlockGrid } from "@/components/color-block-grid";
import { ContentSection } from "@/components/content-section";
import { TextCollection } from "@/components/text-collection";
import { UIColors } from "@/data/color-palettes";

export default function UiFarger() {
  return (
    <div className="grid gap-10">
      <TextCollection
        title="UI-farger"
        description="Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som skal kommunisere til sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral palett."
      />

      {UIColors.map((theme, index) => (
        <ContentSection title={theme.title} key={index}>
          <ColorBlockGrid colors={theme.colors} />
        </ContentSection>
      ))}
    </div>
  );
}
