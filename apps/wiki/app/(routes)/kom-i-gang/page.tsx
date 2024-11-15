import { redirect } from "next/navigation"
import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { metaGettingStarted } from "./gettingStarted.meta"

export const metadata = metaGettingStarted

export default function GetStartedPage() {
  return metadata.redirectsTo ? redirect(metadata.redirectsTo) : null
}
