import { cn } from "@/lib/utils"
import { SideNav } from "@/components/navigation/side-nav"
import { pageLayoutTempFix } from "@/styles/page-layout-temp-fix"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { metaBrandNavigationGroups } from "./brand.meta"

export default async function MerkevareLayout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={cn(
        pageLayoutStyles["page-layout"],
        pageLayoutStyles["page-spacing"],
        pageLayoutTempFix
      )}
    >
      <SideNav groups={metaBrandNavigationGroups} />
      <main className="merkevare-layout-main">{children}</main>
    </div>
  )
}
