import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Vår stemme",
  image: placeholderImageUrl({}),
  description: "",
  disabled: true,
}

export default function VaarStemmePage() {
  return <div>VaarStemmePage</div>
}
