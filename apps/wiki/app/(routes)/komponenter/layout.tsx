import { cn } from "@/lib/utils"
import { pageLayoutTempFix } from "@/styles/page-layout-temp-fix"
import pageLayoutStyles from "@/styles/page-layout.module.css"

export default function ComponentsLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={cn(pageLayoutStyles["page-spacing"], pageLayoutTempFix)}>
      <main className="component-layout-main">{children}</main>
    </div>
  )
}
