"use client"

import { HTMLProps } from "react"
import { cn } from "@/lib/utils"

export const ArticleHighlight = ({
  children,
  className,
}: Pick<HTMLProps<HTMLElement>, "className" | "children">) => {
  return <span className={cn(className)}>{children}</span>
}
