import { redirect } from "next/navigation"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { metadata as fargerPage } from "./farger/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Merkevare",
  image: placeholderImageUrl({}),
  children: [fargerPage],
  description:
    "Merkevare er en samling av designelementer som sammen skaper en helhetlig opplevelse for brukeren. Dette inkluderer farger, fonter, ikoner og illustrasjoner.",
}

export default function BrandingPage() {
  redirect(metadata.href)
}
