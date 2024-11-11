import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metadata as merkevareLayoutGridPage } from "./grid/page"
import { metadata as merkevareLayoutSpacingPage } from "./spacing/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Layout",
  image: placeholderImageUrl({}),
  children: [merkevareLayoutGridPage, merkevareLayoutSpacingPage],
  description:
    "For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon.",
}

export default function LayoutPage() {
  return (
    <SectionLayout>
      <div>
        <Heading text={metadata.title as string} />
        <Ingress>
          For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme
          layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi
          sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette
          skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren
          blir overveldet av informasjon.
        </Ingress>
      </div>
      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
