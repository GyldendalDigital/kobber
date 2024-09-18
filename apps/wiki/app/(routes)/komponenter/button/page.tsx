import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";

import { Metadata } from "next";
import { ButtonSection } from "./_components/section";

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
      <ButtonSection />
    </SectionLayout>
  );
}
