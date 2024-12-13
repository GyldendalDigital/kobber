import { HTMLProps } from "react"
import styles from "@gyldendal/kobber-components/vanilla/kobber-text-wrapper.module.css"
import { cn } from "@/lib/utils"

export const ArticleWrapper = ({
  children,
  className,
}: Pick<HTMLProps<HTMLElement>, "className" | "children">) => {
  return <div className={cn(className, styles["kobber-text-wrapper"])}>{children}</div>
}
