import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { Edit } from "lucide-react"
import { useDraftModeEnvironment } from "next-sanity/hooks"

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment()

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null
  }

  return (
    <KobberButton
      variant="brand-primary-main"
      href="/api/draft-mode/disable"
      icon={<Edit />}
      title="Skru av draft mode"
    />
  )
}
