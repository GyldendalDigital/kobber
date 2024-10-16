import { IdentityColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ColorBlockGridItem } from "@/components/color-block-grid-item"
import { ContentSection } from "@/components/content-section"
import { Illustration } from "@/components/illustration"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Identitetspalett",
  image: placeholderImageUrl({}),
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
          heading: "Full fargepalett",
          ingress:
            "Gyldendals fulle fargepaletter består av fargene Karmin, Aubergin, Vin og Betong. Fargepalettene er laget for å alltid kunne fungere i kombinasjon med hverandre for å skape dynamikk og kontrast, uavhengig av om man ønsker et lyst eller et mørkt uttrykk.",
        }}
      >
        <Illustration
          illuClassName="rotate-90 p-0"
          className="h-[280px]"
          src="https://s3-alpha-sig.figma.com/img/7ae2/c1ce/72fd696f1e19bc73eeb3d90d9ac93d60?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lPXCQx5iXsFc01PXBFAqh2bb4QbA3npilGt~BBu6dCAnXyDfJLCpkjks-68di7TGUcLD96RmCKd1-PuBmKCRhU-g~CEzFsF08QAuajONS3xifTehduafr3Vu66qRAsCu4d9FqN4GDopT3HSm58~sdb1WO6ptC4~nygZAxmTZwCgoznaEi0q9PzvRPsiWZWdStxl4qlNqVYTguek1cqJDnBxBcUGvGC1vV2pxWtxYGftfKS8oJRRXy0fxebkhyFs0mW7dWuh8X~cncpjIm7nwXlIqUTNP4jagmuAsaXf~03KaAhaltIxh3jIfolJsZ7yKFo8KYg~r3PtlWSGl03SqhA__"
        />
      </ContentSection>

      <ContentSection
        textCollection={{
          heading: "Karmin",
          ingress:
            "Karmin er primær identitetsfarge, og brukes i logoer, aktive knapper og for å fremheve deler av tekst. Den skal ikke overbrukes, men heller brukes der den gir effekt og skaper kontrast.",
        }}
        chilClassName="px-0"
        className="gap-32"
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
          className="gap-32"
        >
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ContentSection>
      ))}
    </SectionLayout>
  )
}
