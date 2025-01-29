import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"

export const metaBrandTypographyArial = pageMetadata(import.meta.url, {
  title: "Arial",
  image: damUrl("2ORx4_83KjR9VhrWckk2iZ", ".svg"),
  description:
    "Systemfonten Arial brukes i tilfeller hvor identitetsfonten PP Mori ikke er tilgjengelig. Dette er en font som ikke krever nedlastning og bruken av den sikrer et konsistent utrykk i dokumenter og filer som deles hyppig.",
})
