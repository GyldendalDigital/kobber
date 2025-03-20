import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { ContentLayout } from "@/components/content-layout"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import { metaBrandLogo } from "./logo.meta"

export const metadata = metaBrandLogo

export default function Page() {
  return (
    <ContentLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      {metadata.children && <FeatureBoxGrid items={metadata.children} />}
    </ContentLayout>
  )
}
