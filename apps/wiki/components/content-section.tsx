import { ReactNode } from "react"
import { TextCollectionProps } from "@/types/types"
import { cn } from "@/lib/utils"
import { TextCollection } from "./text-collection"

type ContentSectionProps = {
  textCollection: TextCollectionProps
  children?: ReactNode
  className?: string
  chilClassName?: string
}

export function ContentSection({
  textCollection: { heading, ingress, label, size, subheading, text },
  children,
  className,
  chilClassName,
}: ContentSectionProps) {
  return (
    <div className={cn("grid gap-16", className)}>
      <TextCollection
        heading={heading}
        ingress={ingress}
        size="sm"
        label={label}
        subheading={subheading}
        text={text}
      />
      <div className={cn("grid gap-16 px-main", chilClassName)}>{children}</div>
    </div>
  )
}
