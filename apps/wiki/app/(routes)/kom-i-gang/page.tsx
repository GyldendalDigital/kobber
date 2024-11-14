import { redirect } from "next/navigation"
import {
  pageGettingStartedContact,
  pageGettingStartedHow,
  pageGettingStartedIntro,
} from "@/lib/metadata.pages"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

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
