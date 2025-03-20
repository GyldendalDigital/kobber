import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"

import { ContentLayout } from "@/components/content-layout"
import Image from "next/image"
import { damUrl } from "@/lib/damImageLoader"

export default function TokenIntroPage() {
  return (
    <ContentLayout>
      <KobberTextWrapper>
        <KobberHeading>Responsivitet</KobberHeading>
        <KobberIngress>
          Responsiv layout handler om hvordan en applikasjon viser, responderer og strukturerer
          layout, vinduer og innhold basert på en skjermstørrelse - gjerne kalt responsiv eller
          dynamisk design.
        </KobberIngress>
        <p>
          Å designe responsivitet er utfordrende å få helt nøyaktig i Figma. Dette er design av
          oppførsel og utformes derfor med kode. Vi har derfor designet en guide i Figma som
          illustrerer ønsket oppførsel og token-verdier som skal brukes.
        </p>
        <p>
          På samme måte som med digitale komponenter lager vi layout-komponenter som kan gjenbrukes.
          Vi har startet med noen overordnede layout-komponenter, og vil videreutvikle alternativer
          ved behov.
        </p>
      </KobberTextWrapper>

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Page
        </KobberHeading>
        <p>
          Page-komponenten brukes som det ytterste skallet på en nettside. Vi bruker dynamiske
          størrelser som vokser eller minker avhengig av skjermstørrelsen.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("9aTLwFdua8496hY87ja98D", ".png")}
        width={858}
        height={543}
        className="object-contain"
        alt="Illustrasjon av Page-komponenten"
      />
      <Image
        src={damUrl("04KOsT8P4WBA3JmWkkGyGi", ".svg")}
        width={858}
        height={237}
        className="object-contain"
        alt="Liste med tokens for Main-komponenten"
      />
      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Main
        </KobberHeading>
        <p>
          Main-komponenten har samme dynamiske gap som page, men har i tillegg dynamiske
          side-paddinger som samler innholdet på midten. De har altså mye av den samme
          funksjonaliteten, men page er litt mer fleksibelt med tanke på hvilke layout du ønsker.
          For å bruke main-komponenten må alltid page-komponenten ligge på toppen.
        </p>
        <p>
          Figuren under viser et eksempel der content ligger inne i main, mens andre elementer
          ligger i page.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("DiJ4J5a6aNI9-nJu6bgMPO", ".png")}
        width={858}
        height={451}
        className="object-contain"
        alt="Illustrasjon av Main-komponenten eksempel 1"
      />
      <KobberTextWrapper>
        <p>Eksempel der sidemeny, content, header og footer ligger i main.</p>
      </KobberTextWrapper>
      <Image
        src={damUrl("BB7NABeRq20B0rspwofHPm", ".png")}
        width={858}
        height={451}
        className="object-contain"
        alt="Illustrasjon av Main-komponenten eksempel 1"
      />
      <Image
        src={damUrl("EbgWmPOV4ee84Z0yp5yO6M", ".svg")}
        width={858}
        height={335}
        className="object-contain"
        alt="Liste med tokens for Main-komponenten"
      />
    </ContentLayout>
  )
}
