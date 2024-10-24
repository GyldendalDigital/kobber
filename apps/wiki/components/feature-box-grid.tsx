import { FeatureBoxType } from "@/types/types"
import { FeatureBoxGridItem } from "./feature-box-grid-item"
import { CardLayout, CardLayoutToColumnAspectRatio } from "./kobber-components"

type FeatureBoxGridProps = {
  items: FeatureBoxType[]
}

export function FeatureBoxGrid({ items }: FeatureBoxGridProps) {
  return (
    <CardLayout aspect-ratio-height="0.9" className="p-0">
      {items.map((item, index) => (
        <CardLayoutToColumnAspectRatio key={index}>
          <FeatureBoxGridItem item={item} />
        </CardLayoutToColumnAspectRatio>
      ))}
    </CardLayout>
  )
}
