import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";

import { Metadata } from "next";
import { PrimaryButtonSection } from "./_components/primary-button-section";
import { SecondaryButtonSection } from "./_components/secondary-button-section";
import { PracticeSection } from "./_components/practice-section";

export const metadata: Metadata = {
  title: "Button | Kobber",
  description:
    "En knappkomponent brukes for å utføre en bestemt handling eller trigge en hendelse. Teksten på knappen må tydelig beskrive hva som vil skje når den trykkes på.",
};

const subheading =
  "En knappkomponent brukes for å utføre en bestemt handling eller trigge en hendelse. Teksten på knappen må tydelig beskrive hva som vil skje når den trykkes på.";

export default function ButtonPage() {
  return (
    <SectionLayout>
      <TextCollection heading="Button" subheading={subheading} />
      <PrimaryButtonSection />
      <SecondaryButtonSection />
      <PracticeSection />
    </SectionLayout>
  );
}
