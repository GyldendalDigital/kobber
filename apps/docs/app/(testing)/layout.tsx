import { cn } from "@/lib/utils"
import pageLayoutStyles from "@/styles/page-layout.module.css"

export default function TestLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={cn(pageLayoutStyles["page-spacing"])}>
      <main>{children}</main>
    </div>
  )
}
