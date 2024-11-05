"use client"

import { FeatureBoxType } from "@/types/types"
import { CardLayout, CardLayoutColumnAspectRatio } from "@/components/kobber-components"
import { FeatureBoxGridItem } from "./feature-box-grid-item"

type FeatureBoxGridProps = {
  items: FeatureBoxType[]
}

export function FeatureBoxGrid({ items }: FeatureBoxGridProps) {
  return (
    <CardLayout aspect-ratio-height="0.9" className="p-0">
      {items.map((item, index) => (
        <CardLayoutColumnAspectRatio key={index}>
          <FeatureBoxGridItem item={item} />
        </CardLayoutColumnAspectRatio>
      ))}
    </CardLayout>
  )
}
