import { PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname } from "@/lib/utils"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Retningslinjer",
  status: "kommer",
  image: damImageUrl("6GvVFWJwa3_8m996Ctk3vG", ".svg"),
  description:
    "Retningslinjer er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
}

export default function RetningsLinjerPage() {
  return <div>RetningsLinjerPage</div>
}
