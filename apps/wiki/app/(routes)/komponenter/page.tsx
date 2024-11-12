import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { ArticleWrapper, Ingress } from "@/components/kobber-components"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Komponenter",
  image: placeholderImageUrl({}),
}

export default function ComponentsPage() {
  return (
    <main className="flex h-full items-center justify-center md:h-[calc(100vh-67px-412px)]">
      <ArticleWrapper>
        <Heading>Komponenter</Heading>
        <Ingress>
          Vi er i gang med å bygge opp en samling av digitale komponenter som vil gjøre design- og
          utviklingsprosessen enda enklere. Snart vil du se komponenter med tilhørende
          retningslinjer gradvis rulle ut her. Hold deg oppdatert i vår Teams-kanal.
        </Ingress>
      </ArticleWrapper>
    </main>
  )
}
