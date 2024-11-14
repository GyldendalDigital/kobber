import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaBrandLayoutSpacing = pageMetadata(import.meta.url, {
  title: "Luft",
  image: placeholderImageUrl({}),
  description:
    "God bruk av luft bidrar til å organisere informasjon, forbedrer lesbarheten, og skaper en balansert og estetisk tiltalende side.",
})
