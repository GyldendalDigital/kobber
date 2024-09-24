import { TextCollection } from "@/components/text-collection";
import { FeatureBoxType } from "@/types/types";
import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { SectionLayout } from "@/components/section-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farger | Kobber Wiki",
  description:
    "Farger er en viktig del av Gyldendals merkevare, og er laget for å balansere det funksjonelle og det emosjonelle. Fargepaletten er laget for å håndtere et bredt utvalg av ulike målgrupper.",
};

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
        heading="Farger"
        ingress="Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og håndtere et bredt utvalg
        av ulike målgrupper. Det skal være varmt og gjenkjennelig, samtidig som det skal være behagelig i daglig bruk av
        digitale tjenester. Mangfold er en av Gyldendals viktigste verdier, og det skal derfor være lett å lage
        fargekombinasjoner som oppfyller kravene til universell utforming."
      />

      <FeatureBoxGrid items={featureItems} />
    </SectionLayout>
  );
}
