import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"

export const metadata = pageMetadata(import.meta.url, {
  title: "Retningslinjer",
  status: "kommer",
  image: damUrl("6GvVFWJwa3_8m996Ctk3vG", ".svg"),
  description:
    "Retningslinjer er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
})

export default function RetningsLinjerPage() {
  return <div>RetningsLinjerPage</div>
}
