import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionLayoutProps = {
  children: ReactNode
  className?: string
}

export function SectionLayout({ children, className }: SectionLayoutProps) {
  return <div className={cn("grid w-full max-w-max-width gap-48", className)}>{children}</div>
}
