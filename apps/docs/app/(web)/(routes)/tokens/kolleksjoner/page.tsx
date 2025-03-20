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
        <KobberHeading>Kolleksjoner</KobberHeading>
        <KobberIngress>
          {" "}
          Designtokens organiseres i kolleksjoner etter hvilken kontekst de står i. Instanser av
          tokens kopieres nedover kolleksjonene som gjør at de får bindinger mellom seg. Det betyr
          at dersom vi endrer en token ett sted, vil alle instansene i kolleksjonene under også
          endres.
        </KobberIngress>
      </KobberTextWrapper>
      <Image
        src={damUrl("0A-vmG2Cqn-8K7R7oafkcV", ".svg")}
        width={818}
        height={867}
        className="object-contain"
        alt="Diagram over hvordan kolleksjoner er organisert"
      />

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Primitiv
        </KobberHeading>
        <p>
          Primitiv kolleksjon inneholder alle grunnleggende designtokens i designsystemet som
          farger, størrelser og font-egenskaper.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("73Tj-D4Zane97w32pMlGtY", ".svg")}
        width={818}
        height={479}
        className="object-contain"
        alt="Illustrasjon av primitive tokens"
      />

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Global semantikk
        </KobberHeading>
        <p>
          Instanser (kopier med bindinger) av utvalgte primitive tokens settes inn i semantiske
          kontekster innenfor de overordnede områdene farge, størrelser og typografi. Disse
          kategoriene danner grunnreglene for resten av designsystemet og kalles derfor “Global
          Semantikk”.
        </p>
        <p>
          Farger organiseres og navngis etter hvilken funksjon de har i henhold til Gyldendal sin
          grafiske profil og settes sammen i en skala fra lysest til mørkest.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("D85g_kU2a6X8riarqYG62l", ".svg")}
        width={818}
        height={445}
        className="object-contain"
        alt="Illustrasjon av inndeling av farger global i semantikk"
      />
      <KobberTextWrapper>
        <p>
          Størrelser organiseres etter hvilken egenskap den har i et brukergrensesnitt eller visuelt
          element, og deles inn i skalaer, for eksempel fra small til large.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("AtGdJbBWKYmBOp2MabPMoJ", ".svg")}
        width={818}
        height={373}
        className="object-contain"
        alt="Illustrasjon av inndeling av størrelser i global semantikk"
      />
      <KobberTextWrapper>
        <p>Tekst blir organisert i typografiske kategorier.</p>
      </KobberTextWrapper>
      <Image
        src={damUrl("D8-qVn9Pqou8fhFj21mJAT", ".svg")}
        width={818}
        height={973}
        className="object-contain"
        alt="Illustrasjon av typografi i global semantikk"
      />

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Regional semantikk
        </KobberHeading>
        <p>
          Videre deler vi de globale reglene opp i mindre regionale områder av brukergrensesnittet.
          Eksempler er «Action» som inneholder alle klikkbare og interaktive elementer som knapper,
          linker, toggles og faner eller “Data-display” som inneholder lister, dropdowns, kort og
          badges. Disse regionale områdene setter sammen sine egne kombinasjoner av former, farger
          og typografi i skalaer.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("D0zcgnNTa6UBREp186Mga_", ".svg")}
        width={818}
        height={826}
        className="object-contain"
        alt="Illustrasjon av inndeling av farger global i semantikk"
      />

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Komponenter
        </KobberHeading>
        <p>
          Komponenter har sin egen kolleksjon av tokens og hver komponent-token er unik og skal kun
          tjene den egenskapen den er tildelt i navnet sitt. Samme token skal altså ikke brukes
          flere steder. Dette er et enkelt prinsipp å følge og er også viktig for å kunne forandre
          og iterere på komponenter uten å være redd for side-effekter.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("0LUOF8dkKdPAOE_VB7VCER", ".svg")}
        width={818}
        height={260}
        className="object-contain"
        alt="Illustrasjon av inndeling av farger global i semantikk"
      />

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Universell
        </KobberHeading>
        <p>
          Universelle tokens er tokens som kan anvendes frittstående uten at det for eksempel kommer
          innbakt i et komponent. Et eksempel er focus-border, som av tekniske årsaker ikke kan
          lages om til et komponent.
        </p>
      </KobberTextWrapper>
      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Layout
        </KobberHeading>
        <p>
          Layout-kolleksjonen inneholder tokens som brukes til å lage komponenter som bestemmer
          oppførselen til layouten i brukergrensesnittet - også kalt responsivt, dynamisk eller også
          fluid design. Vi har viet et eget avsnitt om dette under fanen{" "}
          <a href="/tokens/layout">Responsivitet</a>.
        </p>
      </KobberTextWrapper>
      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Samspillet mellom kolleksjonene
        </KobberHeading>
        <p>
          I figuren under ser vi hvordan instanser av tokens kopierer seg nedover kolleksjonene og
          får nye kontekster. Fordelen med dette er at det tvinger oss til å velge en av de
          definerte semantiske størrelsene, noe som gjør designet mer helhetlig og konsekvent. Et
          konsistent design blir mindre tilfeldig og enklere å bruke. Det vil også passe på at
          Gyldendal sin merkevare blir godt ivaretatt og det vil være enklere å endre og iterere
          designet over tid.
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("9XLvPeTGK1TA5lPSv7UO5p", ".svg")}
        width={818}
        height={669}
        className="object-contain"
        alt="Illustrasjon av inndeling av farger global i semantikk"
      />
      <KobberTextWrapper>
        <p>
          Kolleksjoner gir oss også mange muligheter til å gjøre brukergrensesnittet dynamisk. Et
          eksempel er å gi det samme kortet forskjellige fargetemaer. Da trenger vi bare å oversette
          hver enkelt farge i den globale (eller regionale) kolleksjonen og det vil endre seg
          overalt!
        </p>
      </KobberTextWrapper>
      <Image
        src={damUrl("1zbYxiNo4gcARQhw6DkbAK", ".png")}
        width={818}
        height={722}
        className="object-contain"
        alt="Illustrasjon av inndeling av farger global i semantikk"
      />
    </ContentLayout>
  )
}
