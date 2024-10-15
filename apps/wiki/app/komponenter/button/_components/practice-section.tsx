import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContentSection } from "@/components/content-section"
import { KobberButton } from "@/components/kobber-ssr-loader"
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
      <KobberButton variant={"main"} level="primary" color="aubergine">
        Handling 1
      </KobberButton>
      <Button>Handling 2</Button>
    </>
  )
}

function NotAcceptedComponent() {
  return (
    <>
      <Button variant={"dropdown"}>Valg 1</Button>
      <Button variant={"dropdown"}>Valg 2</Button>
      <Button variant={"dropdown"}>Valg 3</Button>
    </>
  )
}

function AcceptedComponenTwo() {
  return (
    <>
      <Button variant={"dropdown"}>
        Last ned <Download className="ml-2 size-4" />
      </Button>
    </>
  )
}

function NotAcceptedComponenTwo() {
  return (
    <>
      <Button
        variant={"dropdown"}
        className="max-w-104 flex-col items-center justify-center overflow-hidden"
      >
        <Download className="ml-2 size-4" />
        <span>Last ned innhold</span>
      </Button>
    </>
  )
}
