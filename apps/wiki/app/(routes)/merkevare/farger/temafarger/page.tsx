import { ContentSection } from "@/components/content-section";
import { TextCollection } from "@/components/text-collection";
import { ColorBlockGrid } from "@/components/color-block-grid";
import { ThemeColors } from "@/data/color-palettes";
import { SectionLayout } from "@/components/section-layout";

export default function Temafarger() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Temafarger"
        ingress="Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å kategorisere produkt-spesifikt innhold."
      />
      {ThemeColors.map((theme, index) => (
        <ContentSection key={index} heading={theme.title}>
          <ColorBlockGrid colors={theme.colors} />
        </ContentSection>
      ))}
    </SectionLayout>
  );
}
