import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaTokensIntro = pageMetadata(import.meta.url, {
  title: "Hva er tokens?",
  image: placeholderImageUrl({}),
  description:
    "En introduksjon til hva designtokens er"
})
