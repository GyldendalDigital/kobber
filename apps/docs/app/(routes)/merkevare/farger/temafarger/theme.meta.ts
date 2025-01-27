import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaBrandColorTheme = pageMetadata(import.meta.url, {
  title: "Temafarger",
  image: damUrl("7zxDRnQoKdQ9TOZHgE5wur"),
  description:
    "Temafarger kan benyttes i avgrensede område for å sette stemning rundt et tema, en enkeltutgivelse eller en kolleksjon av utgivelser. Det er ikke tillatt å bruke disse palettene på et helt brukergrensesnitt eller for å kategorisere produktspesifikt innhold.",
})
