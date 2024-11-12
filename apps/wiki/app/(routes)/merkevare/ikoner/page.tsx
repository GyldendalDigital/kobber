import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metadata as iconsetPage } from "@/app/(routes)/merkevare/ikoner/ikonsett/page"
import { metadata as guidelinesPage } from "@/app/(routes)/merkevare/ikoner/retningslinjer/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Ikoner",
  image: placeholderImageUrl({}),
  description:
    "Ikoner er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
  children: [guidelinesPage, iconsetPage],
}

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
