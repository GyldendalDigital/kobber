import { ContentSection } from "@/components/content-section";
import { TextCollection } from "@/components/text-collection";
import { ColorBlockGridItem } from "@/components/color-block-grid-item";
import { ColorBlockGrid } from "@/components/color-block-grid";
import { IdentityColors } from "@/data/color-palettes";
import { SectionLayout } from "@/components/section-layout";

export default function IdentitetsPalett() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Identitetspalett"
        ingress="Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk."
      />

      <ContentSection
        heading="Karmin"
        ingress="Karmin er primær identitetsfarge, og brukes i logoer, aktive knapper og for å fremheve deler av tekst. Den skal ikke overbrukes, men heller brukes der den gir effekt og skaper kontrast."
      >
        <ColorBlockGridItem color={{ name: "Karmin 525", hex: "#DC134F", rgb: "(220, 19, 79)" }} enableCopy />
      </ContentSection>

      {IdentityColors.map((theme, index) => (
        <ContentSection key={index} heading={theme.title} ingress={theme.description}>
          <ColorBlockGrid colors={theme.colors} />
        </ContentSection>
      ))}
    </SectionLayout>
  );
}
