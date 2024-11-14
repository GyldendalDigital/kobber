import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { pageBrandLayoutGrid } from "./grid/page"
import { pageBrandLayoutSpacing } from "./spacing/page"

export { metadata as pageBrandLayout }

export const metadata = pageMetadata(import.meta.url, {
  title: "Layout",
  image: placeholderImageUrl({}),
  children: [pageBrandLayoutGrid, pageBrandLayoutSpacing],
  description:
    "For at tjenestene våre skal se like ut på tvers, er det viktig at de følger samme layoutprinsipper, samt at de benytter seg av våre farger, komponenter og typografi. Vi sørger for å bruke mye luft i løsningene våre for å organisere og gruppere innhold. Dette skaper en god struktur og gir en behagelig brukeropplevelse som forhindrer at brukeren blir overveldet av informasjon.",
})

export default function LayoutPage() {
  return (
    <SectionLayout>
      <div>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>{metadata.description}</Ingress>
      </div>
      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
