import Image from "next/image"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { ContentLayout } from "@/components/content-layout"
import { RouterTextLink } from "@/components/global/router-link"

export default function TokenIntroPage() {
  return (
    <ContentLayout>
      <KobberTextWrapper>
        <KobberHeading>Hva er designtokens? </KobberHeading>
        <KobberIngress>
          Designtokens er små, gjenbrukbare enheter med designinformasjon som farge, tekststørrelse,
          avstand og skygger. De fungerer som byggesteiner i et designsystem og sørger for at
          designet blir konsekvent på tvers av ulike flater og enheter. Ved å bruke tokens kan
          designere og utviklere enkelt oppdatere designet i én operasjon, og endringene vil
          automatisk slå gjennom i hele systemet.
        </KobberIngress>
      </KobberTextWrapper>

      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Egenskap: verdi
        </KobberHeading>
        <p>
          En designtoken består av en egenskap og en verdi, for eksempel farge: rød. Dette globale
          formatet passer inn i alle typer teknologi og produksjonsverktøy som CSS, Power Point
          eller InDesign.
        </p>
        <p>Noen eksempler:</p>
      </KobberTextWrapper>
      <Image
        src={damUrl("AiqcjsC9quT9X0rbMcayLp", ".svg")}
        width={356}
        height={98}
        className="object-contain"
        alt="Forklaring av verdi: egenskap av tokens"
      />
      <KobberTextWrapper>
        <KobberHeading level="h2" variant="title medium">
          Navngivning
        </KobberHeading>
        <p>
          Tokens blir navngitt etter hvilken kolleksjon, kontekst og egenskap den har, også kalt
          taksonomi. Taksonomi er vitenskapen om klassifisering og systematisering av informasjon.
          Kobber-teamet har laget en mal for hvordan vi navngir tokens. Vi går ikke dypere igjennom
          navngivning her, men ta kontakt dersom du ønsker å vite mer om dette.
        </p>
        <p>
          Under ser vi et eksempel på en token som har fått nytt navn basert på kolleksjon og
          kontekst. Her ser vi også at token-verdier refererer til andre token-verdier. Les mer om
          dette under fanen{" "}
          <RouterTextLink href="/tokens/kolleksjoner">Kolleksjoner</RouterTextLink>.
        </p>
      </KobberTextWrapper>

      <Image
        src={damUrl("637g6Oy54hUAzMIywYBSCB", ".svg")}
        width={858}
        height={49}
        className="object-contain"
        alt="Forklaring av verdi: egenskap av tokens"
      />
    </ContentLayout>
  )
}
