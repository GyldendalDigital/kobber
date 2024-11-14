import { pageMetadata } from "@/lib/metadata.utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandIcons } from "./brandIcons.meta"
import { pageBrandIconsGuidelines, pageBrandIconsSet } from "./brandIcons.pages"

export const metadata = metaBrandIcons

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
