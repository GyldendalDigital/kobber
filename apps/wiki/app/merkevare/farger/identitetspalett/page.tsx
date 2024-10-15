import { Metadata } from "next"
import { IdentityColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ColorBlockGridItem } from "@/components/color-block-grid-item"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const pageDetailsIdentitet: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Identitetspalett",
  image: placeholderImageUrl({}),
}

export const metadata: Metadata = {
  title: documentTitle(pageDetailsIdentitet.title),
  description:
    "Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk.",
}

export default function IdentitetsPalett() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Identitetspalett"
        ingress="Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk."
      />

      <ContentSection
        textCollection={{
          heading: "Karmin",
          ingress:
            "Karmin er primær identitetsfarge, og brukes i logoer, aktive knapper og for å fremheve deler av tekst. Den skal ikke overbrukes, men heller brukes der den gir effekt og skaper kontrast.",
        }}
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
        >
          <ColorBlockGrid colors={theme.colors} />
        </ContentSection>
      ))}
    </SectionLayout>
  )
}
