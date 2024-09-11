import { GET_STARTED_URL } from "@/config/routes"
import { redirect } from "next/navigation"

export default function GetStartedPage() {
	return redirect(`${GET_STARTED_URL}/introduksjon`)
}
