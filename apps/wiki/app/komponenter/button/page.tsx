import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { Metadata } from "next";
import { ButtonSection } from "./_components/button-section";
import { PracticeSection } from "./_components/practice-section";
import { InteractiveStatesSection } from "./_components/interactive-states-section";
import { ContentSection } from "@/components/content-section";
import { pagePathname, placeholderImageUrl, documentTitle } from "@/lib/utils";
import { PageDetails } from "@/types/types";

export const pageDetailsButton: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Button",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsButton.title),
  description:
    "En knappkomponent brukes for å utføre en bestemt handling eller trigge en hendelse. Teksten på knappen må tydelig beskrive hva som vil skje når den trykkes på.",
};

const subheading =
  "En knappkomponent brukes for å utføre en bestemt handling eller trigge en hendelse. Teksten på knappen må tydelig beskrive hva som vil skje når den trykkes på.";

export default function ButtonPage() {
  return (
    <SectionLayout>
      <TextCollection heading="Button" subheading={subheading} />
      <ContentSection
        heading="Primærknapp"
        ingress="Brukes som hovedhandling på en side. Knappen finnes i flere fargeutførelser avhengig av konteksten den brukes i. Identitetsfargen karminrød og lys aubergine er ofte brukt på både lys og mørk bakgrunn."
      >
        <ButtonSection level="primary" />
      </ContentSection>
      <ContentSection
        heading="Sekundærknapp"
        ingress="Brukes til mindre viktige handlinger. Står ofte sammen med primærknappen. Den finnes i flere fargeutførelser avhengig av konteksten den brukes i."
      >
        <ButtonSection level="secondary" />
      </ContentSection>
      <PracticeSection />
      <InteractiveStatesSection />
    </SectionLayout>
  );
}
