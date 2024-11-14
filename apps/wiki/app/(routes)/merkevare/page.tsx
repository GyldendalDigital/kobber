import { redirect } from "next/navigation"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { metadata as fargerPage } from "./farger/page"
import { metadata as ikonerPage } from "./ikoner/page"
import { metadata as logoPage } from "./logo/page"
import { metadata as brandingLevelsPage } from "./merkevarehierarki/page"
import { metadata as typografiPage } from "./typografi/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Merkevare",
  image: placeholderImageUrl({}),
  children: [fargerPage, ikonerPage, logoPage, brandingLevelsPage, typografiPage],
  description:
    "Merkevare er en samling av designelementer som sammen skaper en helhetlig opplevelse for brukeren. Dette inkluderer farger, fonter, ikoner og illustrasjoner.",
  redirectsTo: brandingLevelsPage.href,
}

export default function BrandingPage() {
  return metadata.redirectsTo ? redirect(metadata.redirectsTo) : null
}
