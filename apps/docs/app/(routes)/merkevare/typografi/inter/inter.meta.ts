import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaBrandTypographyInter = pageMetadata(import.meta.url, {
  title: "Inter",
  image: damUrl("CVfEZzAPqUGASn21lmiGDZ", ".svg"),
  description:
    "Inter er en open source-font som brukes på komponenter i brukergrensesnitt, og i digitale tekster hvor det finnes pedagogiske behov for ulike varianter av bokstaver og tegn.",
})
