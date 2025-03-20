import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"

export const metaLanding = pageMetadata(import.meta.url, {
  title: "Gyldendals designsystem",
  image: damUrl("2bULAP2gabp9rC4A1CbQSB", ".jpg"),
  description: "Design, bygg, og skap gode løsninger med Gyldendals designsystem.",
})
