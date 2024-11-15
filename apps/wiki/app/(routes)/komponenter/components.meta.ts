import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaComponents = pageMetadata(import.meta.url, {
  title: "Komponenter",
  image: placeholderImageUrl({}),
  description:
    "Vi er i gang med å bygge opp en samling av digitale komponenter som vil gjøre design- og tviklingsprosessen enda enklere. Snart vil du se komponenter med tilhørende retningslinjer gradvis rulle ut her. Hold deg oppdatert i vår Teams-kanal.",
})
