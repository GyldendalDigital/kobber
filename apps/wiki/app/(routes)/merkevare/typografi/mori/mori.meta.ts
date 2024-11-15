import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaBrandTypographyMori = pageMetadata(import.meta.url, {
  title: "PP Mori",
  image: damUrl("2EyeCFedaTx9HKSLc9MOEL", ".svg"),
  description:
    "PP Mori er Gyldendals identitetsbærende hovedskrift og benyttes i Gyldendal på alle nivåer i vår kommunikasjon - fra logoer til overskrifter, brødtekst og fotnoter.",
})
