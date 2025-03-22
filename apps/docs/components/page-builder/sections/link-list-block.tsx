import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"linkListBlock">

export function LinkListBlock(props: Props) {
  return (
    <div className="link-list-block">
      {props.links && (
        <FeatureBoxGrid items={props.links.map((f) => ({ ...f, href: f.url }))} />
      )}
    </div>
  )
}
