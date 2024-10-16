import { redirect } from "next/navigation"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Kom i gang",
  image: placeholderImageUrl({}),
}

export default function GetStartedPage() {
  return redirect(`${metadata.href}/introduksjon`)
}
