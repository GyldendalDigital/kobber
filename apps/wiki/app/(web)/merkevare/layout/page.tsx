import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { placeholderImageUrl } from "@/lib/utils";
import { FeatureBoxType } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layout | Kobber Wiki",
  description:
    "For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon.",
};

const url = "/merkevare/layout";

const featureItems: FeatureBoxType[] = [
  { title: "Identitetsprinsipper", href: `${url}/identitetsprinsipper`, image: placeholderImageUrl({}) },
  { title: "Grid og skjermstørrelser", href: `${url}/grid`, image: placeholderImageUrl({}) },
  { title: "Spacing", href: `${url}/spacing`, image: placeholderImageUrl({}) },
];

export default function LayoutPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Layout"
        ingress="For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon."
      />

      <FeatureBoxGrid items={featureItems} />
    </SectionLayout>
  );
}
