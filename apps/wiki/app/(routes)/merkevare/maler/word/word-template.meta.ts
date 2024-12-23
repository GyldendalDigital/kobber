import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"

export const metaWordTemplate = pageMetadata(import.meta.url, {
  title: "Word",
  image: damUrl("3JL4GOmxaRn84uZIfmRqAa", ".svg"),
  description: "Dokument- og brevmal",
})
