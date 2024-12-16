"use client"

import { HTMLProps } from "react"
import { textHighlightFunctions } from "@gyldendal/kobber-components/vanilla"
import styles from "@gyldendal/kobber-components/vanilla/kobber-text-highlight.module.css"
import { cn } from "@/lib/utils"

export const ArticleHighlight = ({
  variant,
  children,
  className,
}: Parameters<typeof textHighlightFunctions.classNames>[0] &
  Pick<HTMLProps<HTMLElement>, "className" | "children">) => {
  return (
    <span
      className={cn(
        className,
        textHighlightFunctions.classNamesFromCssModule(styles, { variant })
      )}
      onClick={textHighlightFunctions.onClick}
    >
      {children}
    </span>
  )
}
