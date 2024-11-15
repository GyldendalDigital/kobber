import { redirect } from "next/navigation"
import { metaBrand } from "./brand.meta"

export const metadata = metaBrand

export default function BrandingPage() {
  return metadata.redirectsTo ? redirect(metadata.redirectsTo) : null
}
