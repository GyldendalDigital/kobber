import { redirect } from "next/navigation"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Komponenter",
  image: placeholderImageUrl({}),
  disabled: true,
}

export default function ComponentsPage() {
  return redirect(`${metadata.href}/button`)
}
