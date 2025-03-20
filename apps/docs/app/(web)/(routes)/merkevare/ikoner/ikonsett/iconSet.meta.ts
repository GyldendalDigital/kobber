import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"

export const metaBrandIconSet = pageMetadata(import.meta.url, {
  title: "Ikonsett",
  image: damUrl("5eWSL54644-8vUcyASwDWy", ".svg"),
  description:
    "Ikonsett er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
})
