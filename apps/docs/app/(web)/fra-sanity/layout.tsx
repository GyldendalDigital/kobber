import { draftMode } from "next/headers"
import { SanityLive } from "@/sanity/lib/live"
import { VisualEditing } from "next-sanity"
import { cn } from "@/lib/utils"
import { DisableDraftMode } from "@/components/DisableDraftMode"
import { metaBrandNavigationGroups } from "@/components/navigation/navigation-map"
import { SideNav } from "@/components/navigation/side-nav"
import pageLayoutStyles from "@/styles/page-layout.module.css"

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const draft = await draftMode()
  draft.enable()
  return (
    <div className={cn(pageLayoutStyles["page-layout"], pageLayoutStyles["page-spacing"])}>
      <SideNav groups={metaBrandNavigationGroups} />
      <main className="sanity-layout-main">{children}</main>
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
