import Image from "next/image"
import { IdentityColors } from "@/data/color-palettes"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { damUrl } from "@/lib/damImageLoader"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ColorBlockGridItem } from "@/components/color-block-grid-item"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandColorIdentity } from "./identity.meta"

export const metadata = metaBrandColorIdentity

export default function IdentitetsPalett() {
  return (
    <SectionLayout>
      <KobberTextWrapper className="gap-[8px]">
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-[0px]">
        <KobberHeading level="h2" variant="heading small">
          Full fargepalett
        </KobberHeading>
        <p>
          Gyldendals fulle fargepaletter består av fargene Karmin, Aubergin, Vin og Betong.
          Fargepalettene er laget for å alltid kunne fungere i kombinasjon med hverandre for å skape
          dynamikk og kontrast, uavhengig av om man ønsker et lyst eller et mørkt uttrykk.
        </p>

        <Image
          src={damUrl("FVgHrlJXKR1AoxS-CeWwzK")}
          width={711}
          height={322}
          alt="Fargepaletten, her representert med fargene Karmin, Aubergin, Vin og Betong"
        />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-[0px]">
        <KobberHeading level="h2" variant="heading small">
          Karmin
        </KobberHeading>
        <p>
          Karmin er primær identitetsfarge, og brukes i logoer, aktive knapper og for å fremheve
          deler av tekst. Den skal ikke overbrukes, men heller brukes der den gir effekt og skaper
          kontrast.
        </p>
        <ColorBlockGridItem
          color={{ name: "Karmin 525", hex: "#DC134F", rgb: "(220, 19, 79)" }}
          enableCopy
        />
      </KobberTextWrapper>

      {IdentityColors.map((theme, index) => (
        <KobberTextWrapper key={index} className="gap-0">
          <KobberHeading level="h2" variant="heading small">
            {theme.title}
          </KobberHeading>
          <p>{theme.description}</p>
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </KobberTextWrapper>
      ))}

      <KobberTextWrapper className="max-w-[711px] gap-[0px]">
        <KobberHeading level="h2" variant="heading small">
          Fargekombinasjoner
        </KobberHeading>
        <p>
          Til ulike stemninger og kontekster kan det varieres mellom de tre fargekombinasjoner vi
          bygger identitet rundt. Det lyse og mørke uttrykket skal brukes i størst grad, og
          karminrød skal ikke overbrukes. Kombinasjonen av de mørkeste tonene av aubergin sammen med
          signalfargen Karmin 525 gjør det lett å skape et moderne digitalt uttrykk som fremstår
          varmt og emosjonelt.
        </p>
        <Image
          src={damUrl("EuqcwI8eaka8gV6z2lnji4")}
          width={711}
          height={440}
          alt="Mørke og støttede identiteter"
        />
      </KobberTextWrapper>

      <KobberTextWrapper className="max-w-[711px] gap-[0px]">
        <KobberHeading level="h2" variant="heading small">
          Unngå dette
        </KobberHeading>
        <p>
          Det er viktig at bruken av fargepaletten forblir konsistent som en del av et helhetlig
          utrykk og for å sikre nok kontrast. Fargene skal derfor ikke justeres og det skal ikke
          lages egne fargekombinasjoner utenfor det som er definert.
        </p>
        <div className="flex flex-col items-center justify-center gap-[24px] md:grid md:grid-cols-2">
          <Image
            src={damUrl("5yvZJUv-Ks-8aPU-IEBOWc", ".svg")}
            width={342}
            height={332}
            alt="Ikke bruk transparens, egne fargekombinasjoner, lås farger til egne kategorier, eller bruk temafarger til hele grensesnitt"
          />
          <Image
            src={damUrl("8QSf3zFDKVL8WGtHM3Lwcl", ".svg")}
            width={342}
            height={332}
            alt="Ikke bruk egne fargekombinasjoner"
          />
          <Image
            src={damUrl("A_jAwC68qpF82nfI3E_wjX", ".svg")}
            width={342}
            height={332}
            alt="Ikke lås farger til egne kategorier"
          />
          <Image
            src={damUrl("9Wxt7SUNKO380j8l7AhKhu")}
            width={342}
            height={332}
            alt="Ikke bruk temafarger til hele grensesnitt"
          />
        </div>
      </KobberTextWrapper>
    </SectionLayout>
  )
}
