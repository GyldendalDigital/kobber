import { SectionLayout } from "@/components/section-layout";
import { Metadata } from "next";
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { TextCollection } from "@/components/text-collection";

export const pageDetailsSpacing: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Spacing",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsSpacing.title),
  description:
    "God bruk av luft bidrar til å organisere informasjon, forbedrer lesbarheten, og skaper en balansert og estetisk tiltalende side. Spacing refererer til hvordan mellomrom brukes i utformingen av en nettside. ",
};

export default function SpacingPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading={pageDetailsSpacing.title}
        ingress={`God bruk av luft bidrar til å organisere informasjon, forbedrer lesbarheten, og skaper en balansert og estetisk tiltalende side. Spacing refererer til hvordan mellomrom brukes i utformingen av en nettside. Dette inkluderer blant annet:
mellomrom mellom avsnitt og linjer, som påvirker lesbarheten ved å gi tekst nok luft til at den blir enkel å lese
Avstanden mellom innholdet og kanten av en boks eller ramme på siden (padding)
Avstand mellom elementer, der mellomrommet mellom bilder, tekst, overskrifter, og andre elementer bidrar til en organisert og visuelt tiltalende layout
Bruk av marginer, luften rundt kanten på en side, som skiller innholdet fra sidens kant `}
      />
    </SectionLayout>
  );
}
