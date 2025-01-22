import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaLayout = pageMetadata(import.meta.url, {
  title: "Responsivitet",
  image: placeholderImageUrl({}),
  description:
    "Responsiv layout er hvordan en applikasjon viser, responderer og strukturerer layout, vinduer og innhold basert på en en skjermstørrelse - gjerne kalt responsiv eller dynamisk design."
})
