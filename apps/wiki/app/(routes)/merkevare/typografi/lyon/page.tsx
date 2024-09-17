import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";

const ingress = `Lyon Display er en kontemporær tilnærming til en tradisjonell skriftstil, og fungerer som et mer emosjonelt og elegant supplement til primærskriften PP Mori.

Kan brukes til sitater og som emosjonell kontrast i en redaksjonell overskrift.`;

export default function LyongPage() {
  return (
    <SectionLayout>
      <TextCollection heading="Lyon Display" ingress={ingress} />
    </SectionLayout>
  );
}
