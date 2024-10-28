import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Retningslinjer",
  image: placeholderImageUrl({}),
  description:
    "Retningslinjer er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
  children: [],
}

export default function RetningsLinjerPage() {
  return <div>RetningsLinjerPage</div>
}
