import { ContentSection } from "@/components/content-section";
import { TextCollection } from "@/components/text-collection";
import { ColorBlockGridItem } from "@/components/color-block-grid-item";
import { ColorBlockGrid } from "@/components/color-block-grid";
import { ColorThemeType } from "@/types/types";

const colorThemes: ColorThemeType[] = [
  {
    title: "Aubergine",
    description:
      "Auberginepaletten brukes aktivt i identiteten, til både tekstfarger og bakgrunnsfarger i henholdsvis mørkt eller lyst utrykk. Midttonen brukes til stikktitler, skillestreker og metatekster. Aubergine 25 brukes istedenfor helt hvitt og Aubergine 1000 erstatter helt svart.",
    colors: [
      { name: "Aubergine 25", hex: "#FDF9F9", rgb: "(253, 249, 249)", hasBorder: true },
      { name: "Aubergine 50", hex: "#F9EAED", rgb: "(249, 234, 237)" },
      { name: "Aubergine 425", hex: "#EC4F87", rgb: "(236, 79, 135)" },
      { name: "Aubergine 525", hex: "#CE3871", rgb: "(206, 56, 113)" },
      { name: "Aubergine 750", hex: "#691837", rgb: "(105, 24, 55)" },
      { name: "Aubergine 850", hex: "#481125", rgb: "(72, 17, 37)" },
      { name: "Aubergine 900", hex: "#330314", rgb: "(51, 3, 20)" },
      { name: "Aubergine 1000", hex: "#28000E", rgb: "(40, 0 ,14)" },
    ],
  },
  {
    title: "Vin",
    description: "Vin brukes i inaktive knapper, skillestreker, ingresser og metatekster, både i lyst og mørkt utrykk.",
    colors: [
      { name: "Wine 150", hex: "#E5CFD3", rgb: "(229, 207, 211)" },
      { name: "Wine 525", hex: "#A35E70", rgb: "(163, 94, 112)" },
      { name: "Wine 600", hex: "#884D5D", rgb: "(136, 77, 93)" },
    ],
  },
];

export default function IdentitetsPalett() {
  return (
    <div className="grid gap-10">
      <TextCollection
        title="Identitetspalett"
        description="Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk."
      />

      <ContentSection
        title="Karmin"
        description="Karmin er primær identitetsfarge, og brukes i logoer, aktive knapper og for å fremheve deler av tekst. Den skal ikke overbrukes, men heller brukes der den gir effekt og skaper kontrast."
      >
        <ColorBlockGridItem color={{ name: "Karmin 525", hex: "#DC134F", rgb: "(220, 19, 79)" }} enableCopy />
      </ContentSection>

      {colorThemes.map((theme, index) => (
        <ContentSection key={index} title={theme.title} description={theme.description}>
          <ColorBlockGrid colors={theme.colors} />
        </ContentSection>
      ))}
    </div>
  );
}
