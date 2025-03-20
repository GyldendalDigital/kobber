import { cn } from "@/lib/utils"
import { SideNav } from "@/components/navigation/side-nav"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { metaBrandNavigationGroups } from "../../../../components/navigation/navigation-map"

export default async function MerkevareLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={cn(pageLayoutStyles["page-layout"], pageLayoutStyles["page-spacing"])}>
      <SideNav groups={metaBrandNavigationGroups} />
      <main className="merkevare-layout-main">{children}</main>
    </div>
  )
}
