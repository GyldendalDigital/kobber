import Image from "next/image"
import { IdentityColors } from "@/data/color-palettes"
import { damUrl } from "@/lib/damImageLoader"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ColorBlockGridItem } from "@/components/color-block-grid-item"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandColorIdentity } from "./identity.meta"

export const metadata = metaBrandColorIdentity

export default function IdentitetsPalett() {
  return (
    <SectionLayout>
      <ArticleWrapper className="gap-[8px]">
        <h2 className="text-[48px] text-[#691837]">{metadata.title as string}</h2>
        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px] gap-[0px]">
        <h5 className="text-[24px] text-[#481125]">Full fargepalett</h5>
        <Body>
          Gyldendals fulle fargepaletter består av fargene Karmin, Aubergin, Vin og Betong.
          Fargepalettene er laget for å alltid kunne fungere i kombinasjon med hverandre for å skape
          dynamikk og kontrast, uavhengig av om man ønsker et lyst eller et mørkt uttrykk.
        </Body>

        <Image
          src={damUrl("FVgHrlJXKR1AoxS-CeWwzK")}
          width={711}
          height={322}
          alt="Fargepaletten, her representert med fargene Karmin, Aubergin, Vin og Betong"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px] gap-[0px]">
        <h5 className="text-[24px] text-[#481125]">Karmin</h5>
        <Body>
          Karmin er primær identitetsfarge, og brukes i logoer, aktive knapper og for å fremheve
          deler av tekst. Den skal ikke overbrukes, men heller brukes der den gir effekt og skaper
          kontrast.
        </Body>
        <ColorBlockGridItem
          color={{ name: "Karmin 525", hex: "#DC134F", rgb: "(220, 19, 79)" }}
          enableCopy
        />
      </ArticleWrapper>

      {IdentityColors.map((theme, index) => (
        <ArticleWrapper key={index}>
          <h5 className="text-[24px] text-[#481125]">{theme.title}</h5>
          <Body>{theme.description}</Body>
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ArticleWrapper>
      ))}

      <ArticleWrapper className="max-w-[711px] gap-[0px]">
        <h5 className="text-[24px] text-[#481125]">Fargekombinasjoner</h5>
        <Body>
          Til ulike stemninger og kontekster kan det varieres mellom de tre fargekombinasjoner vi
          bygger identitet rundt. Det lyse og mørke uttrykket skal brukes i størst grad, og
          karminrød skal ikke overbrukes. Kombinasjonen av de mørkeste tonene av aubergin sammen med
          signalfargen Karmin 525 gjør det lett å skape et moderne digitalt uttrykk som fremstår
          varmt og emosjonelt.
        </Body>
        <Image
          src={damUrl("EuqcwI8eaka8gV6z2lnji4")}
          width={711}
          height={440}
          alt="Mørke og støttede identiteter"
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px] gap-[0px]">
        <h5 className="text-[24px] text-[#481125]">Unngå dette</h5>
        <Body>
          Det er viktig at bruken av fargepaletten forblir konsistent som en del av et helhetlig
          utrykk og for å sikre nok kontrast. Fargene skal derfor ikke justeres og det skal ikke
          lages egne fargekombinasjoner utenfor det som er definert.
        </Body>
        <div className="flex flex-col items-center justify-center gap-[24px] md:grid md:grid-cols-2">
          <Image
            src={damUrl("6_E6OVQOa41A6i06G0TwK3")}
            width={342}
            height={332}
            alt="Ikke bruk transparens, egne fargekombinasjoner, lås farger til egne kategorier, eller bruk temafarger til hele grensesnitt"
          />
          <Image
            src={damUrl("ADn7d89N45lB3I1C4ySlrG")}
            width={342}
            height={332}
            alt="Ikke bruk egne fargekombinasjoner"
          />
          <Image
            src={damUrl("2YIm7z1fqrY9F2Pwt1cK2X")}
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
      </ArticleWrapper>
    </SectionLayout>
  )
}
