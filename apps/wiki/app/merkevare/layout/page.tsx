import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"
import { metadata as merkevareLayoutGridPage } from "./grid/page"
import { metadata as merkevareLayoutIdentitetsPrinsipperPage } from "./identitetsprinsipper/page"
import { metadata as merkevareLayoutSpacingPage } from "./spacing/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Layout",
  image: placeholderImageUrl({}),
  children: [
    merkevareLayoutGridPage,
    merkevareLayoutSpacingPage,
    merkevareLayoutIdentitetsPrinsipperPage,
  ],
  description:
    "For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon.",
}

export default function LayoutPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Layout"
        ingress="For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon."
      />

      <FeatureBoxGrid items={merkevareLayoutSpacingPage.children! as any} />
    </SectionLayout>
  )
}
