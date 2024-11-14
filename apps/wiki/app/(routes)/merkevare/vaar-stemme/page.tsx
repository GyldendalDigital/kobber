import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export { metadata as pageGettingStartedIntro }

export const metadata = pageMetadata(import.meta.url, {
  title: "Vår stemme",
  image: placeholderImageUrl({}),
  description: "",
})

export default function VaarStemmePage() {
  return <div>VaarStemmePage</div>
}
