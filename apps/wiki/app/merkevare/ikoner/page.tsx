import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Ikoner",
  image: placeholderImageUrl({}),
  description:
    "Ikoner er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
}

export default function IkonerPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading={metadata.title as string}
        ingress="Vi bruker ikoner for å gjøre det enklere for brukerne å forstå innhold, elementer og oppgaver. Et effektivt ikon formidler et konsept på en måte som er intuitivt for brukerne."
      />
    </SectionLayout>
  )
}
