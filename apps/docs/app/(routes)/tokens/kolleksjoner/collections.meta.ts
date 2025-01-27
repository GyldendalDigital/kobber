import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaCollections = pageMetadata(import.meta.url, {
  title: "Kolleksjoner",
  image: placeholderImageUrl({}),
  description:
    "Designtokens oraganiseres i desgn tokens"
})
