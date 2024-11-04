import { FeatureBoxType } from "@/types/types"
import { CardLayout, CardLayoutToColumnAspectRatio } from "@/components/kobber-ssr-loader"
import { FeatureBoxGridItem } from "./feature-box-grid-item"
import { Skeleton } from "./ui/skeleton"

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

export function FeatureBoxGridSkeleton() {
  return <Skeleton className="h-[270px] w-[256px] rounded-md" />
}
