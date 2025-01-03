import { pageMetadata } from "@/lib/metadata.utils"
import { metaBrandIconSet } from "./ikonsett/iconSet.meta"
import { metaBrandIconGuidelines } from "./retningslinjer/guidelines.meta"

export const metaBrandIcons = pageMetadata(import.meta.url, {
  title: "Ikoner",
  image: metaBrandIconGuidelines.image,
  description:
    "Ikoner er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
  children: [metaBrandIconGuidelines, metaBrandIconSet],
})
