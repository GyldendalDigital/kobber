import { redirect } from "next/navigation"
import { metaGettingStarted } from "./gettingStarted.meta"

export const metadata = metaGettingStarted

export default function GetStartedPage() {
  return metadata.redirectsTo ? redirect(metadata.redirectsTo) : null
}
