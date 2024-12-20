import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { metaComponents } from "./components.meta"

export const metadata = metaComponents

export default function ComponentsPage() {
  return (
    <main className="flex h-full items-center justify-center md:h-[calc(100vh-67px-412px)]">
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>
      </KobberTextWrapper>
    </main>
  )
}
