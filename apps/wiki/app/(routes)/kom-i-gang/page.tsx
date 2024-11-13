import { redirect } from "next/navigation"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { metadata as howToPage } from "@/app/(routes)/kom-i-gang/hvordan-bruke-kobber/page"
import { metadata as introPage } from "@/app/(routes)/kom-i-gang/introduksjon/page"
import { metadata as contactPage } from "@/app/(routes)/kom-i-gang/kontakt/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Kom i gang",
  image: placeholderImageUrl({}),
  description:
    "Velkommen til Gyldendals designsystem. Her finner du informasjon om hvordan du kommer i gang med designsystemet.",
  children: [introPage, howToPage, contactPage],
}

export default function GetStartedPage() {
  return redirect(`${metadata.href}/introduksjon`)
}
