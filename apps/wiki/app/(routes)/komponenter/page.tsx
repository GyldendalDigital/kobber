import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"
import { metaComponents } from "./components.meta"

export const metadata = metaComponents

export default function ComponentsPage() {
  return (
    <main className="flex h-full items-center justify-center md:h-[calc(100vh-67px-412px)]">
      <ArticleWrapper>
        <Heading>Komponenter</Heading>
        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>
    </main>
  )
}
