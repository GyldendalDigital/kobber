import { PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname } from "@/lib/utils"
import { HeroImage } from "@/components/hero-image"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Arial",
  status: "kommer",
  image: damImageUrl("2ORx4_83KjR9VhrWckk2iZ", ".svg"),
}

export default function arialPage() {
  return (
    <div>
      <HeroImage src={metadata.image} />
    </div>
  )
}
