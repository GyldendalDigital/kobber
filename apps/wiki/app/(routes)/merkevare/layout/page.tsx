import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandLayout } from "./brandLayout.meta"

export const metadata = metaBrandLayout

export default function LayoutPage() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>
      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
