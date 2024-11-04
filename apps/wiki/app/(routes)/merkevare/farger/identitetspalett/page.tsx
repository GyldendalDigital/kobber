import { IdentityColors } from "@/data/color-palettes"
import { IllustrationType, PageDetails } from "@/types/types"
import { pagePathname } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ColorBlockGridItem } from "@/components/color-block-grid-item"
import { ContentSection } from "@/components/content-section"
import { Illustrations, IllustrationsSkeleton } from "@/components/illustrations"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Identitetspalett",
  image:
    "https://dam-p-gyldendal.pqcloud.eu/authkey/W73B6GH3DM/preview/BkRpubsF45_8o0iVkKSQod/previews/maxWidth_1600_maxHeight_1600.jpg/*/identitet_preview.jpg?_=1",
  description:
    "Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk.",
}

const illusrations: IllustrationType[] = [
  {
    src: "https://dam-p-gyldendal.pqcloud.eu/authkey/W73B6GH3DM/preview/BkRpubsF45_8o0iVkKSQod/previews/maxWidth_1600_maxHeight_1600.jpg/*/identitet_preview.jpg?_=1",
    width: 771,
    height: 296,
    fill: true,
  },
]

export default function IdentitetsPalett() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Identitetspalett"
        ingress="Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk."
      />

      <ContentSection
        textCollection={{
          heading: "Full fargepalett",
          ingress:
            "Gyldendals fulle fargepaletter består av fargene Karmin, Aubergin, Vin og Betong. Fargepalettene er laget for å alltid kunne fungere i kombinasjon med hverandre for å skape dynamikk og kontrast, uavhengig av om man ønsker et lyst eller et mørkt uttrykk.",
        }}
      >
        <Illustrations
          className="h-[300px]"
          illuClassName="rotate-90 p-0"
          illustrations={illusrations}
        />
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Karmin",
          ingress:
            "Karmin er primær identitetsfarge, og brukes i logoer, aktive knapper og for å fremheve deler av tekst. Den skal ikke overbrukes, men heller brukes der den gir effekt og skaper kontrast.",
        }}
        chilClassName="px-0"
        className="gap-y-section/gap/horizontal"
      >
        <ColorBlockGridItem
          color={{ name: "Karmin 525", hex: "#DC134F", rgb: "(220, 19, 79)" }}
          enableCopy
        />
      </ContentSection>

      {IdentityColors.map((theme, index) => (
        <ContentSection
          key={index}
          textCollection={{ heading: theme.title, ingress: theme.description }}
          chilClassName="px-0"
          className="gap-y-section/gap/horizontal"
        >
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ContentSection>
      ))}

      <ContentSection
        textCollection={{
          heading: "Fargekombinasjoner",
          text: `Til ulike stemninger og kontekster kan det varieres mellom de tre fargekombinasjoner vi bygger identitet rundt. Det lyse og mørke uttrykket skal brukes i størst grad, og karminrød skal ikke overbrukes. Kombinasjonen av de mørkeste tonene av aubergin sammen med signalfargen Karmin 525 gjør det lett å skape et moderne digitalt uttrykk som fremstår varmt og emosjonelt.`,
        }}
      >
        <IllustrationsSkeleton />
        {/* <Illustrations illustrations={levelFourIllustrations} /> */}
      </ContentSection>
      <ContentSection
        textCollection={{
          heading: "Unngå dette",
          text: `Det er viktig at bruken av fargepaletten forblir konsistent som en del av et helhetlig utrykk og for å sikre nok kontrast. Fargene skal derfor ikke justeres og det skal ikke lages egne fargekombinasjoner utenfor det som er definert.`,
        }}
      >
        <IllustrationsSkeleton />
      </ContentSection>
    </SectionLayout>
  )
}
