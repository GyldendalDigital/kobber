import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { pagePathname, placeholderImageUrl, documentTitle } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { Metadata } from "next";

export const pageDetailsIkoner: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Ikoner",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsIkoner.title),
  description:
    "Ikoner er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
};

export default function IkonerPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading={pageDetailsIkoner.title}
        ingress="Vi bruker ikoner for å gjøre det enklere for brukerne å forstå innhold, elementer og oppgaver. Et effektivt ikon formidler et konsept på en måte som er intuitivt for brukerne."
      />
    </SectionLayout>
  );
}
