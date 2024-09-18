import { ContentSection } from "@/components/content-section";
import { PracticeIllustration } from "@/components/practice-illustration";

export function PracticeSection() {
  return (
    <ContentSection heading="God og dårlig praksis">
      <PracticeIllustration
        notAcceptedText="Unngå flere likvektede valg på samme område, da det skaper forvirring for veien videre."
        acceptedText="Vektlegg viktigheten på knappene visuelt for å hjelpe brukeren dit de skal."
      />
      <PracticeIllustration
        notAcceptedText="Knappen skal ikke brekke over to linjer, eller overskride knappens rammer."
        acceptedText="Velg korte beskrivelser av handlingen brukeren kan ta."
      />
    </ContentSection>
  );
}
