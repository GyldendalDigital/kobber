import { redirect } from "next/navigation"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { pageGettingStartedHow } from "./hvordan-bruke-kobber/page"
import { pageGettingStartedIntro } from "./introduksjon/page"
import { pageGettingStartedContact } from "./kontakt/page"

export { metadata as pageGettingStarted }

export const metadata = pageMetadata(import.meta.url, {
  title: "Kom i gang",
  image: placeholderImageUrl({}),
  description:
    "Velkommen til Gyldendals designsystem. Her finner du informasjon om hvordan du kommer i gang med designsystemet.",
  children: [pageGettingStartedIntro, pageGettingStartedHow, pageGettingStartedContact],
  redirectsTo: pageGettingStartedIntro.href,
})

export default function GetStartedPage() {
  return metadata.redirectsTo ? redirect(metadata.redirectsTo) : null
}
