import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type BodyTextProps = {
  children: React.ReactNode
  className?: string
}

export const BodyText = ({ children, className }: BodyTextProps) => {
  return (
    <p className={cn("truncate whitespace-pre-wrap text-primary-body", className)}>{children}</p>
  )
}
