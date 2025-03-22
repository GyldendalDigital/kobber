import { draftMode } from "next/headers"
import { SanityLive } from "@/sanity/lib/live"
import { VisualEditing } from "next-sanity"
import { cn } from "@/lib/utils"
import { DisableDraftMode } from "@/components/DisableDraftMode"

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const draft = await draftMode()
  draft.enable()
  return (
    <div className={cn("sanity-layout")}>
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </div>
  )
}
