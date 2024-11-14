import { pageBrandIconsGuidelines, pageBrandIconsSet } from "@/lib/metadata.pages"
import { pageMetadata } from "@/lib/metadata.utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export const metadata = pageMetadata(import.meta.url, {
  title: "Ikoner",
  image: pageBrandIconsGuidelines.image,
  description:
    "Ikoner er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
  children: [pageBrandIconsGuidelines, pageBrandIconsSet],
})

export default function IkonerPage() {
  return (
    <SectionLayout>
      <div>
        <Heading>{metadata.title as string}</Heading>
        <Ingress>
          Vi bruker ikoner for å gjøre det enklere for brukerne å forstå innhold, elementer og
          oppgaver. Et effektivt ikon formidler et konsept på en måte som er intuitivt for brukerne.
        </Ingress>
      </div>
      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
