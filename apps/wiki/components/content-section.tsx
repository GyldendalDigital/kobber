import { ReactNode } from "react"
import { TextCollectionProps } from "@/types/types"
import { TextCollection } from "./text-collection"

type ContentSectionProps = {
  textCollection: TextCollectionProps
  children?: ReactNode
}

export function ContentSection({
  textCollection: { heading, ingress, label, size, subheading, text },
  children,
}: ContentSectionProps) {
  return (
    <div className="grid gap-16">
      <TextCollection
        heading={heading}
        ingress={ingress}
        size="sm"
        label={label}
        subheading={subheading}
        text={text}
      />
      <div className="grid gap-16 px-main">{children}</div>
    </div>
  )
}
