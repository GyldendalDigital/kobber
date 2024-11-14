import { redirect } from "next/navigation"
import {
  pageBrandColors,
  pageBrandIcons,
  pageBrandLevels,
  pageBrandLogo,
  pageBrandTypography,
} from "@/lib/metadata.pages"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

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
