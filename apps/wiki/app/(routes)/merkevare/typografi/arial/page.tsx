import { PageDetails } from "@/types/types"
import { pagePathname } from "@/lib/utils"
import { damImageUrl } from "@/lib/damImageLoader"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Arial",
  image: damImageUrl("CVfEZzAPqUGASn21lmiGDZ"),
}

export default function arialPage() {
  return <div>arialPage</div>
}
