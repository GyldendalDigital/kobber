import { IdentityColors } from "@/data/color-palettes"
import { IllustrationType, PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ColorBlockGridItem } from "@/components/color-block-grid-item"
import { Illustrations, IllustrationsSkeleton } from "@/components/illustrations"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Identitetspalett",
  image: damImageUrl("BkRpubsF45_8o0iVkKSQod"),
  description:
    "Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk.",
}

const illusrations: IllustrationType[] = [
  {
    src: damImageUrl("FVgHrlJXKR1AoxS-CeWwzK"),
    width: 771,
    height: 296,
    fill: true,
  },
]

export default function IdentitetsPalett() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <h2 className="text-[48px] text-[#691837]">{metadata.title as string}</h2>
        <Ingress>
          Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere
          Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig
          som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk.
        </Ingress>
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Full fargepalett</h5>
        <Body>
          Gyldendals fulle fargepaletter består av fargene Karmin, Aubergin, Vin og Betong.
          Fargepalettene er laget for å alltid kunne fungere i kombinasjon med hverandre for å skape
          dynamikk og kontrast, uavhengig av om man ønsker et lyst eller et mørkt uttrykk.
        </Body>
        <Illustrations
          className="h-[300px] rounded-none"
          illuClassName=" p-0"
          illustrations={illusrations}
        />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
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

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Fargekombinasjoner</h5>
        <Body>
          Til ulike stemninger og kontekster kan det varieres mellom de tre fargekombinasjoner vi
          bygger identitet rundt. Det lyse og mørke uttrykket skal brukes i størst grad, og
          karminrød skal ikke overbrukes. Kombinasjonen av de mørkeste tonene av aubergin sammen med
          signalfargen Karmin 525 gjør det lett å skape et moderne digitalt uttrykk som fremstår
          varmt og emosjonelt.
        </Body>
        <IllustrationsSkeleton />
      </ArticleWrapper>

      <ArticleWrapper className="max-w-[711px]">
        <h5 className="text-[24px] text-[#481125]">Unngå dette</h5>
        <Body>
          Det er viktig at bruken av fargepaletten forblir konsistent som en del av et helhetlig
          utrykk og for å sikre nok kontrast. Fargene skal derfor ikke justeres og det skal ikke
          lages egne fargekombinasjoner utenfor det som er definert.
        </Body>
        <IllustrationsSkeleton />
      </ArticleWrapper>
    </SectionLayout>
  )
}
