import { ContentSection } from "@/components/content-section";
import { PracticeIllustration } from "@/components/practice-illustration";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function PracticeSection() {
  return (
    <ContentSection heading="God og dårlig praksis (TODO: bytt ut med bilder)">
      <PracticeIllustration
        notAcceptedText="Unngå flere likvektede valg på samme område, da det skaper forvirring for veien videre."
        acceptedText="Vektlegg viktigheten på knappene visuelt for å hjelpe brukeren dit de skal."
        acceptedComponent={<AcceptedComponent />}
        notAcceptedComponent={<NotAcceptedComponent />}
      />
      <PracticeIllustration
        notAcceptedText="Knappen skal ikke brekke over to linjer, eller overskride knappens rammer."
        acceptedText="Velg korte beskrivelser av handlingen brukeren kan ta."
        acceptedComponent={<AcceptedComponenTwo />}
        notAcceptedComponent={<NotAcceptedComponenTwo />}
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

function AcceptedComponenTwo() {
  return (
    <>
      <Button variant={"dropdown"}>
        Last ned <Download className="size-4 ml-2" />
      </Button>
    </>
  );
}

function NotAcceptedComponenTwo() {
  return (
    <>
      <Button variant={"dropdown"} className="flex-col items-center justify-center max-w-[102px] overflow-hidden ">
        <Download className="size-4 ml-2" />
        <span>Last ned innhold</span>
      </Button>
    </>
  );
}
