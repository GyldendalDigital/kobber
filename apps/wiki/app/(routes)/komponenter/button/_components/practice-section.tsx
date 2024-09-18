import { ContentSection } from "@/components/content-section";
import { PracticeIllustration } from "@/components/practice-illustration";
import { Button } from "@/components/ui/button";

export function PracticeSection() {
  return (
    <ContentSection heading="God og dårlig praksis">
      <PracticeIllustration
        notAcceptedText="Unngå flere likvektede valg på samme område, da det skaper forvirring for veien videre."
        acceptedText="Vektlegg viktigheten på knappene visuelt for å hjelpe brukeren dit de skal."
        acceptedComponent={<AcceptedComponent />}
        notAcceptedComponent={<NotAcceptedComponent />}
      />
      <PracticeIllustration
        notAcceptedText="Knappen skal ikke brekke over to linjer, eller overskride knappens rammer."
        acceptedText="Velg korte beskrivelser av handlingen brukeren kan ta."
        acceptedComponent={<div>Hello</div>}
        notAcceptedComponent={<div>World</div>}
      />
    </ContentSection>
  );
}

function AcceptedComponent() {
  return (
    <>
      <Button variant={"dropdown"}>Handling 1</Button>
      <Button>Handling 2</Button>
    </>
  );
}
function NotAcceptedComponent() {
  return (
    <>
      <Button variant={"dropdown"}>Valg 1</Button>
      <Button variant={"dropdown"}>Valg 2</Button>
      <Button variant={"dropdown"}>Valg 3</Button>
    </>
  );
}
