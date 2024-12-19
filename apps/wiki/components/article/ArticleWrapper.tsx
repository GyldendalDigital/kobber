import { HTMLProps } from "react"
import { cn } from "@/lib/utils"

export const ArticleWrapper = ({
  children,
  className,
}: Pick<HTMLProps<HTMLElement>, "className" | "children">) => {
  return <div className={cn(className)}>{children}</div>
}
