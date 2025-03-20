import { pageMetadata } from "@/lib/metadata.utils"
import { damUrl } from "../../../../../lib/damImageLoader"

export const metaLayout = pageMetadata(import.meta.url, {
  title: "Responsivitet",
  image: damUrl("9aTLwFdua8496hY87ja98D", ".png"),
  description:
    "Responsiv layout er hvordan en applikasjon viser, responderer og strukturerer layout, vinduer og innhold basert på en en skjermstørrelse - gjerne kalt responsiv eller dynamisk design.",
})
