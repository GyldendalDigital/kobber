import { ContentSection } from "@/components/content-section";
import { TextCollection } from "@/components/text-collection";
import { ColorBlockItem } from "../_components/color-block-item";
import { ColorItemType } from "@/types/types";

const KrimColors: ColorItemType[] = [
  { name: "Crime 250", hex: "#AEC3C3", rgb: "(174, 195, 195)" },
  { name: "Crime 850", hex: "#0B2E3A", rgb: "(11, 46, 58)" },
  { name: "Crime 900", hex: "#081E27", rgb: "(8, 30, 39)" },
];
const FantasyColors: ColorItemType[] = [
  { name: "Fantasy 250", hex: "#C1B9C4", rgb: "(229, 207, 211)" },
  { name: "Fantasy 750", hex: "#3F3643", rgb: "(163, 94, 112)" },
  { name: "Fantasy 850", hex: "#28222a", rgb: "(136, 77, 93)" },
];
const NaturColors: ColorItemType[] = [
  { name: "Nature 50", hex: "#D9E7D5", rgb: "(217, 231, 213)" },
  { name: "Nature 525", hex: "#6c7868", rgb: "(108, 120, 104)" },
  { name: "Nature 750", hex: "#343A32", rgb: "(52, 58, 50)" },
];
const NostalgiColors: ColorItemType[] = [
  { name: "Nostalgia 25", hex: "#fdf9f6", rgb: "(253, 249, 246)", hasBorder: true },
  { name: "Nostalgia 600", hex: "#705B4A", rgb: "(112, 91, 74)" },
  { name: "Nostalgia 850", hex: "#2F2115", rgb: "(47, 33, 21)" },
];
const FerieColors: ColorItemType[] = [
  { name: "Vacation 50", hex: "#faebe6", rgb: "(250, 235, 230)" },
  { name: "Vacation 600-a", hex: "#705a56", rgb: "(112, 90, 86)" },
  { name: "Vacation 600-b", hex: "#B02C13", rgb: "(176, 44, 19)" },
];
const RomanseColors: ColorItemType[] = [
  { name: "Romanse 50", hex: "#f9eaec", rgb: "(249, 234, 237)" },
  { name: "Romanse 675", hex: "#8b2241", rgb: "(139. 34. 65)" },
  { name: "Romanse 750", hex: "#6a1830", rgb: "(106, 24, 48)" },
];

export default function Temafarger() {
  return (
    <div className="grid gap-10">
      <TextCollection
        title="Temafarger"
        description="Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å kategorisere produkt-spesifikt innhold."
      />

      <ContentSection title="Krim">
        <div className="grid grid-cols-4 gap-[24px]">
          {KrimColors.map((color, index) => (
            <ColorBlockItem key={index} color={color} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Fantasy">
        <div className="grid grid-cols-4 gap-[24px]">
          {FantasyColors.map((color, index) => (
            <ColorBlockItem key={index} color={color} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Natur">
        <div className="grid grid-cols-4 gap-[24px]">
          {NaturColors.map((color, index) => (
            <ColorBlockItem key={index} color={color} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Nostalgi">
        <div className="grid grid-cols-4 gap-[24px]">
          {NostalgiColors.map((color, index) => (
            <ColorBlockItem key={index} color={color} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Ferie">
        <div className="grid grid-cols-4 gap-[24px]">
          {FerieColors.map((color, index) => (
            <ColorBlockItem key={index} color={color} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Romanse">
        <div className="grid grid-cols-4 gap-[24px]">
          {RomanseColors.map((color, index) => (
            <ColorBlockItem key={index} color={color} />
          ))}
        </div>
      </ContentSection>
    </div>
  );
}
