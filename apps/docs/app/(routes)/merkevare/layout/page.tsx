import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentLayout } from "@/components/content-layout"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import { metaBrandLayout } from "./brandLayout.meta"

export const metadata = metaBrandLayout

export default function LayoutPage() {
  return (
    <ContentLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>
      <FeatureBoxGrid items={metadata.children ?? []} />
    </ContentLayout>
  )
}
