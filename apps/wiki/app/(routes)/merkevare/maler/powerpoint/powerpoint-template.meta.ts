import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"

export const metaPowerpointTemplate = pageMetadata(import.meta.url, {
  title: "Powerpoint",
  image: damUrl("9mqGJBvca749ZG12tLwg9R", ".svg"),
  description:
    "Presentasjonsmalen i Powerpoint skal brukes for alle presentasjoner for å sikre et konsistent utrykk med Gyldendal som avsender.",
})
