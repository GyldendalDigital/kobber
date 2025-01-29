import { cn } from "@/lib/utils"
import pageLayoutStyles from "@/styles/page-layout.module.css"

export default function ComponentsLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={cn(pageLayoutStyles["page-spacing"])}>
      <main className="component-layout-main">{children}</main>
    </div>
  )
}
