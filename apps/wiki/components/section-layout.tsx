import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionLayoutProps = {
  children: ReactNode
  className?: string
}

export function SectionLayout({ children, className }: SectionLayoutProps) {
  return <div className={cn("gap-y-content/gap/horizontal grid w-full", className)}>{children}</div>
}
