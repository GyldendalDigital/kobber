"use client"

import { FeatureBoxType } from "@/types/types"
import { CardLayout, CardLayoutColumnAspectRatio } from "@/components/kobber-components"
import { FeatureBoxGridItem } from "./feature-box-grid-item"

type FeatureBoxGridProps = {
  items: FeatureBoxType[]
}

/** TODO: remove padding and scaling hack when root layout padding is replaced by box layout */
export function FeatureBoxGrid({ items }: FeatureBoxGridProps) {
  return (
    <CardLayout aspect-ratio-height="0.86" className="scale-[1.03] p-0">
      {items.map((item, index) => (
        <CardLayoutColumnAspectRatio key={index}>
          <FeatureBoxGridItem item={item} />
        </CardLayoutColumnAspectRatio>
      ))}
    </CardLayout>
  )
}
