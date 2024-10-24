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
    "https://s3-alpha-sig.figma.com/img/0279/ca05/b7605ba9a77fb36d5104c4066cccadcb?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7rQ5SsaI5oh6M7k2vP7jdNVnzFn5DSdgL~FUQCOLyR0lZXRlc8fociOk6xrfLogZiRYUxgqR9uerOBpU5LzhEsuP1RH~3mUw5yoxj3Uhcfl3Hrsf2YNaoQzVYFguaeKfhnAzpvhXCwnuj1j575mI3WCrQOYqT~WkxO0gUvLqoEgOf3b5aGZnPpyE-Anp55MJcoHjBAhCTc8NgNNQEzUXncmHvBjPyBG5cGvJNy6DGz8pMvNp0cUdbSg0rBvwIt57eMJVcXPJQG5GJKIErP70Qo1ipRGjCUDxhyf0CVpgXOsmoJ1Ff97Mmadygu0z7uFoL7xzETKC3GBBz9LMtQ8~Q__",
  description:
    "Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk.",
}

const illusrations: IllustrationType[] = [
  {
    src: "https://s3-alpha-sig.figma.com/img/7ae2/c1ce/72fd696f1e19bc73eeb3d90d9ac93d60?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lPXCQx5iXsFc01PXBFAqh2bb4QbA3npilGt~BBu6dCAnXyDfJLCpkjks-68di7TGUcLD96RmCKd1-PuBmKCRhU-g~CEzFsF08QAuajONS3xifTehduafr3Vu66qRAsCu4d9FqN4GDopT3HSm58~sdb1WO6ptC4~nygZAxmTZwCgoznaEi0q9PzvRPsiWZWdStxl4qlNqVYTguek1cqJDnBxBcUGvGC1vV2pxWtxYGftfKS8oJRRXy0fxebkhyFs0mW7dWuh8X~cncpjIm7nwXlIqUTNP4jagmuAsaXf~03KaAhaltIxh3jIfolJsZ7yKFo8KYg~r3PtlWSGl03SqhA__",
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
