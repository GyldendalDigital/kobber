import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandLayout } from "./brandLayout.meta"

export const metadata = metaBrandLayout

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
