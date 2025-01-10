import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandLogo } from "./logo.meta"

export const metadata = metaBrandLogo

export default function Page() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>

      {metadata.children && <FeatureBoxGrid items={metadata.children} />}
    </SectionLayout>
  )
}
