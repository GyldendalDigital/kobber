import { Download } from "lucide-react"
import { Button as RadixButton } from "@/components/ui/button"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/kobber-components"
import { PracticeIllustration } from "@/components/practice-illustration"

export function PracticeSection() {
  return (
    <ContentSection
      textCollection={{ heading: "God og dårlig praksis (TODO: bytt ut med bilder)" }}
    >
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
  )
}

function AcceptedComponent() {
  return (
    <>
      <Button variant={"main"} level="primary" color="aubergine">
        Handling 1
      </Button>
      <RadixButton>Handling 2</RadixButton>
    </>
  )
}

function NotAcceptedComponent() {
  return (
    <>
      <RadixButton variant={"dropdown"}>Valg 1</RadixButton>
      <RadixButton variant={"dropdown"}>Valg 2</RadixButton>
      <RadixButton variant={"dropdown"}>Valg 3</RadixButton>
    </>
  )
}

function AcceptedComponenTwo() {
  return (
    <>
      <RadixButton variant={"dropdown"}>
        Last ned <Download className="ml-2 size-4" />
      </RadixButton>
    </>
  )
}

function NotAcceptedComponenTwo() {
  return (
    <>
      <RadixButton
        variant={"dropdown"}
        className="max-w-104 flex-col items-center justify-center overflow-hidden"
      >
        <Download className="ml-2 size-4" />
        <span>Last ned innhold</span>
      </RadixButton>
    </>
  )
}
