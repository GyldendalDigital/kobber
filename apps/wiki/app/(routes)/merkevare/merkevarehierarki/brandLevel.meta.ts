import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaBrandLevel = pageMetadata(import.meta.url, {
  title: "Merkevare­hierarki",
  image: placeholderImageUrl({}),
  description:
    "Merkevarearkitekturens formål er å gi en klar struktur over merkevaren vår og hvordan produktene og løsningene våre henger sammen. Arkitekturen skal sørge for at vi snakker med konsistent visuell stemme, slik at vi styrker kommunikasjonen med og relasjonene til alle våre målgrupper. Dette vil gi større kraft til merkevaren Gyldendal, og gi oss bedre muligheter til å skape større verdi og nå våre mål.",
})
