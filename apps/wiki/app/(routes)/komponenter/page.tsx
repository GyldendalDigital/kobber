import { COMPONENTS_URL } from "@/config/routes"
import { redirect } from "next/navigation"

export default function ComponentsPage() {
	return redirect(`${COMPONENTS_URL}/introduksjon`)
}
