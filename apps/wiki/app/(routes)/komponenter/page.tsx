import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { metaComponents } from "./components.meta"

export const metadata = metaComponents

export default function ComponentsPage() {
  return (
    <div className="components-page">
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>
    </div>
  )
}
