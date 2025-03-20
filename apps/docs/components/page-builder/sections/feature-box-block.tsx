import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"contactListBlock">

export function FeatureBoxBlock(props: Props) {
  return (
    <div className="feature-box-block">
      fetch pages and show image and title
    </div>
  )
}
