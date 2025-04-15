import { draftMode } from "next/headers"
import { SanityLive } from "@/sanity/lib/live"
import { cn } from "@/lib/utils"
import { NavBar } from "@/components/navigation/nav-bar/nav-bar"
import { DraftTools } from "./_draftTools/DraftTools"

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const draft = await draftMode()
  draft.enable()
  return (
    <div className={cn("sanity-layout")}>
      <NavBar />
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && <DraftTools />}
    </div>
  )
}
