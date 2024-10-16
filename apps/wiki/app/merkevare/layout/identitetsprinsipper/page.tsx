import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { SectionLayout } from "@/components/section-layout"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Identitetsprinsipper",
  image: placeholderImageUrl({}),
  status: "kommer",
  description: "",
}

export default function IdentitetsPrinsipper() {
  return (
    <SectionLayout>
      <div>TODO</div>
    </SectionLayout>
  )
}
