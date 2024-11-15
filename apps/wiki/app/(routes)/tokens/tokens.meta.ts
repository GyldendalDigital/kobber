import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaTokens = pageMetadata(import.meta.url, {
  title: "Tokens",
  image: placeholderImageUrl({}),
  status: "kommer",
})