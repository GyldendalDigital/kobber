import { ContentSection } from "@/components/content-section";
import { TextCollection } from "@/components/text-collection";
import { ColorBlockGrid } from "@/components/color-block-grid";
import { ThemeColors } from "@/data/color-palettes";

export default function Temafarger() {
  return (
    <div className="grid gap-10">
      <TextCollection
        title="Temafarger"
        description="Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å kategorisere produkt-spesifikt innhold."
      />
      {ThemeColors.map((theme, index) => (
        <ContentSection key={index} title={theme.title}>
          <ColorBlockGrid colors={theme.colors} />
        </ContentSection>
      ))}
    </div>
  );
}
