import { TextCollection } from "@/components/text-collection";
import { FeatureBoxType } from "@/types/types";
import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { SectionLayout } from "@/components/section-layout";

const url = "/merkevare/farger";

const featureItems: FeatureBoxType[] = [
  { title: "Identitetspalett", href: `${url}/identitetspalett` },
  { title: "Temafarger", href: `${url}/temafarger` },
  { title: "UI-farger", href: `${url}/ui-farger` },
];

export default function FargerSection() {
  return (
    <SectionLayout>
      <TextCollection
        title="Farger"
        description="Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og håndtere et bredt utvalg
        av ulike målgrupper. Det skal være varmt og gjenkjennelig, samtidig som det skal være behagelig i daglig bruk av
        digitale tjenester. Mangfold er en av Gyldendals viktigste verdier, og det skal derfor være lett å lage
        fargekombinasjoner som oppfyller kravene til universell utforming."
      />

      <FeatureBoxGrid items={featureItems} />
    </SectionLayout>
  );
}
