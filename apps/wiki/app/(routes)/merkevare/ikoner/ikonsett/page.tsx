import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Ikonsett",
  image: placeholderImageUrl({}),
  description:
    "Ikonsett er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
}

export default function IkonSett() {
  return <div>IkonSett</div>
}
