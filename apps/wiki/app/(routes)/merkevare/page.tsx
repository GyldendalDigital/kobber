import { BrandingRoutesData } from "@/data/routes-data"
import { redirect } from "next/navigation"

export default function GetStartedPage() {
	return redirect(BrandingRoutesData[3].href)
}
