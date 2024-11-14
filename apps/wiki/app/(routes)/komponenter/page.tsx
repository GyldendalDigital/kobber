import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"

export const metadata = pageMetadata(import.meta.url, {
  title: "Komponenter",
  image: placeholderImageUrl({}),
  description:
    "Vi er i gang med å bygge opp en samling av digitale komponenter som vil gjøre design- og tviklingsprosessen enda enklere. Snart vil du se komponenter med tilhørende retningslinjer gradvis rulle ut her. Hold deg oppdatert i vår Teams-kanal.",
})

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
