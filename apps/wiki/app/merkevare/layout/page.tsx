import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { Metadata } from "next";
import { pageDetailsGrid } from "./grid/page";
import { pageDetailsSpacing } from "./spacing/page";
import { pageDetailsIdentitetsprinsipper } from "./identitetsprinsipper/page";

export const pageDetailsLayout: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Layout",
  image: placeholderImageUrl({}),
  children: [pageDetailsGrid, pageDetailsSpacing, pageDetailsIdentitetsprinsipper],
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsLayout.title),
  description:
    "For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon.",
};

export default function LayoutPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Layout"
        ingress="For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon."
      />

      <FeatureBoxGrid items={pageDetailsLayout.children!} />
    </SectionLayout>
  );
}
