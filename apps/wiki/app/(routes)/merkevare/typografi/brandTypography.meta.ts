import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { metaBrandTypographyArial } from "./arial/arial.meta"
import { metaBrandTypographyInter } from "./inter/inter.meta"
import { metaBrandTypographyLyon } from "./lyon/lyon.meta"
import { metaBrandTypographyMori } from "./mori/mori.meta"

export const metaBrandTypography = pageMetadata(import.meta.url, {
  title: "Typografi",
  image: damUrl("Frg1nstAKYsA0hKXNk3z5x", ".svg"),
  children: [
    metaBrandTypographyMori,
    metaBrandTypographyLyon,
    metaBrandTypographyInter,
    metaBrandTypographyArial,
  ],
  description:
    "Vårt typografiske system skal håndtere hele Gyldendals bredde av ulike sjangere og formater.",
})
