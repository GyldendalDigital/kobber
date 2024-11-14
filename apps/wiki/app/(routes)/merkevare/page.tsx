import { redirect } from "next/navigation"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { pageBrandColors } from "./farger/page"
import { pageBrandIcons } from "./ikoner/page"
import { pageBrandLogo } from "./logo/page"
import { pageBrandLevels } from "./merkevarehierarki/page"
import { pageBrandTypography } from "./typografi/page"

export { metadata as pageBrand }

export const metadata = pageMetadata(import.meta.url, {
  title: "Merkevare",
  image: placeholderImageUrl({}),
  children: [pageBrandColors, pageBrandIcons, pageBrandLogo, pageBrandLevels, pageBrandTypography],
  description:
    "Merkevare er en samling av designelementer som sammen skaper en helhetlig opplevelse for brukeren. Dette inkluderer farger, fonter, ikoner og illustrasjoner.",
  redirectsTo: pageBrandLevels.href,
})

export default function BrandingPage() {
  return metadata.redirectsTo ? redirect(metadata.redirectsTo) : null
}
