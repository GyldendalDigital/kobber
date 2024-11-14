import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { metaBrandColor } from "./farger/brandColor.meta"
import { metaBrandIcons } from "./ikoner/brandIcons.meta"
import { metaBrandLogo } from "./logo/logo.meta"
import { metaBrandLevel } from "./merkevarehierarki/brandLevel.meta"
import { metaBrandTypography } from "./typografi/brandTypography.meta"

export const metaBrand = pageMetadata(import.meta.url, {
  title: "Merkevare",
  image: placeholderImageUrl({}),
  children: [metaBrandColor, metaBrandIcons, metaBrandLogo, metaBrandLevel, metaBrandTypography],
  description:
    "Merkevare er en samling av designelementer som sammen skaper en helhetlig opplevelse for brukeren. Dette inkluderer farger, fonter, ikoner og illustrasjoner.",
  redirectsTo: metaBrandLevel.href,
})
