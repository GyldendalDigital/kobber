import { PageDetails } from "@/types/types"
import { pagePathname } from "@/lib/utils"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Arial",
  image:
    "https://dam-p-gyldendal.pqcloud.eu/authkey/xD6Ek5kB61/preview/CVfEZzAPqUGASn21lmiGDZ/previews/maxWidth_1600_maxHeight_1600.jpg/*/Inter_preview.jpg?_=1",
  description: "",
}

export default function arialPage() {
  return <div>arialPage</div>
}
