import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaBrandLayoutGrid = pageMetadata(import.meta.url, {
  title: "Layout og grid",
  image: placeholderImageUrl({}),
  description:
    "Vi har definert en layout grid slik at våre løsninger skal fungere godt på alle skjermbredder og ha et helhetlig oppsett. Griden følger reglene for riktig spacing for å plassere elementer med jevn rytme, riktig hierarki og med god bruk av luft.",
})
