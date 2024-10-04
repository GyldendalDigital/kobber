import { TextCollection } from "@/components/text-collection";
import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { SectionLayout } from "@/components/section-layout";
import { Metadata } from "next";
import { pageDetailsUi } from "./ui-farger/page";
import { pageDetailsTema } from "./temafarger/page";
import { pageDetailsIdentitet } from "./identitetspalett/page";
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils";
import { PageDetails } from "@/types/types";

export const pageDetailsFarge: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Farger",
  image: placeholderImageUrl({}),
  children: [pageDetailsIdentitet, pageDetailsTema, pageDetailsUi],
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsFarge.title),
  description:
    "Farger er en viktig del av Gyldendals merkevare, og er laget for å balansere det funksjonelle og det emosjonelle. Fargepaletten er laget for å håndtere et bredt utvalg av ulike målgrupper.",
};

export default function FargerSection() {
  return (
    <SectionLayout>
      <TextCollection
        heading={pageDetailsFarge.title}
        ingress="Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og håndtere et bredt utvalg
        av ulike målgrupper. Det skal være varmt og gjenkjennelig, samtidig som det skal være behagelig i daglig bruk av
        digitale tjenester. Mangfold er en av Gyldendals viktigste verdier, og det skal derfor være lett å lage
        fargekombinasjoner som oppfyller kravene til universell utforming."
      />

      <FeatureBoxGrid items={pageDetailsFarge.children!} />
    </SectionLayout>
  );
}
