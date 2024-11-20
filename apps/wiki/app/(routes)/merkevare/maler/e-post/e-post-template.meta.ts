import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"

export const metaEMailTemplate = pageMetadata(import.meta.url, {
  title: "E-post",
  image: damUrl("3ETp8prlKjW9JIxK5G5wz5", ".png"),
  description:
    "Det er viktig å avslutte eposter med en enhetlig signatur for å sikre et helhetlig og konsistent uttrykk utad. ",
})
