import { placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"featureBoxBlock">

export function FeatureBoxBlock(props: Props) {
  return (
    <div className="feature-box-block">
      {props.features && (
        <FeatureBoxGrid
          items={props.features.map((f) => ({
            ...f,
            href: f.slug,
            image: f.image ?? placeholderImageUrl({ size: "20x20" }),
          }))}
        />
      )}
    </div>
  )
}
