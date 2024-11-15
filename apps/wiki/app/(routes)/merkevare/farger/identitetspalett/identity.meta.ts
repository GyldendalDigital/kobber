import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaBrandColorIdentity = pageMetadata(import.meta.url, {
  title: "Identitetspalett",
  image: damUrl("BkRpubsF45_8o0iVkKSQod", ".svg"),
  description:
    "Dette er vår identitetspalett, som består av de mest brukte fargene for å etablere Gyldendals stiluttrykk. Markedsføring forholder seg alltid til denne paletten, samtidig som utvidede paletter er tilgjengelige for designere av brukergrensesnitt og bokmalverk.",
})
