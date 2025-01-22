import { metaTokens } from "./tokens.meta"
import { redirect } from "next/navigation"

export const metadata = metaTokens

export default function TokensPage() {
  return metadata.redirectsTo ? redirect(metadata.redirectsTo) : null
}
