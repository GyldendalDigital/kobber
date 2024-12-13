"use client"

import { HTMLProps } from "react"
import { textHighlightFunctions } from "@gyldendal/kobber-components/vanilla"
import styles from "@gyldendal/kobber-components/vanilla/kobber-text-highlight.module.css"
import { cn } from "@/lib/utils"

export const ArticleHighlight = ({
  children,
  className,
}: Pick<HTMLProps<HTMLElement>, "className" | "children">) => {
  return (
    <span
      className={cn(className, styles["kobber-text-highlight"])}
      onClick={textHighlightFunctions.onClick}
    >
      {children}
    </span>
  )
}
