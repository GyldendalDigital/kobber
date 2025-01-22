import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"

import Image from "next/image"
import { SectionLayout } from "@/components/section-layout"
import { damUrl } from "@/lib/damImageLoader"

export default function TokenIntroPage() {
  return (
    <SectionLayout className="max-w-[818px]">
      <KobberTextWrapper>
        <KobberHeading>Responsivitet</KobberHeading>
        <KobberIngress> Responsiv layout er hvordan en applikasjon viser, responderer og strukturerer layout, vinduer og innhold basert på en en skjermstørrelse - gjerne kalt responsiv eller dynamisk design.</KobberIngress>
        <p>
          Å designe responsivitet er vanskelig å gjøre i Figma. Dette er design av oppførsel og må derfor utformes med kode. Derfor designer vi en slags guide i Figma der vi illustrerer ønsket oppførsel og hvilke verdier, altså tokens som skal brukes.
        </p>
        <p>
          På samme måte som med digitale komponenter lager vi layout-komponenter som kan gjenbrukes. Per i dag har vi startet med noen overordnede og generiske layout-komponenter, men disse dekker ikke alle behovene der ute. Denne teksten er derfor ment som dokumentasjon av hvordan vi utformer og bruker layout i designsystemet illustrerrt med layout-komponentene under.
        </p>
      </KobberTextWrapper>

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Page
        </KobberHeading>
        <p>
          Page-komponentet brukes som det ytterste skallet på en nettside. Vi bruker dynamiske størrelser som vokser eller minker avhengig av skjermstørrelsen.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("9aTLwFdua8496hY87ja98D", ".png")}
        width={858}
        height={543}
        className="object-contain"
        alt="Illustrasjon av Page-komponentet"
      />
      <Image
        src={damUrl("04KOsT8P4WBA3JmWkkGyGi", ".svg")}
        width={858}
        height={237}
        className="object-contain"
        alt="Liste med tokens for Main-komponentet"
      />
      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Main
        </KobberHeading>
        <p>
          Main-komponentet har samme dynamiske gutter som page, men har i tillegg dynamiske sidemarginer som samler innholdet på midten. De har altså mye av den samme funksjonaliteten, men page er litt mer fleksibelt med tanke på hvilke layout du ønsker. For å bruke main-komponentet må alltid page-komponentet ligge på toppen.
        </p>
        <p>
          Figuren under viser et eksempel der content ligger inne i main, mens andre elementer ligger i page. Eksempel i dag: Skolestudio.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("DiJ4J5a6aNI9-nJu6bgMPO", ".png")}
        width={858}
        height={451}
        className="object-contain"
        alt="Illustrasjon av Main-komponentet eksempel 1"
      />
      <KobberTextWrapper>
        <p>
          Eksempel der sidemeny, content, header og footer ligger i main. Eksempel i dag: Kobber dokumentasjon.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("BB7NABeRq20B0rspwofHPm", ".png")}
        width={858}
        height={451}
        className="object-contain"
        alt="Illustrasjon av Main-komponentet eksempel 1"
      />
      <Image
        src={damUrl("EbgWmPOV4ee84Z0yp5yO6M", ".svg")}
        width={858}
        height={335}
        className="object-contain"
        alt="Liste med tokens for Main-komponentet"
      />
    </SectionLayout>
  )
}

