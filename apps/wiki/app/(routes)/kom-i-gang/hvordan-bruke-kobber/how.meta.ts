import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaGettingStartedHow = pageMetadata(import.meta.url, {
  title: "Hvordan bruke Kobber",
  image: placeholderImageUrl({}),
  description:
    "Denne nettsiden kan sees på som Gyldendals oppslagsverk for merkevare og designsystem. Her samles all informasjon slik at vi har en felles kilde med eksempler og retningslinjer vi kan følge.",
})
