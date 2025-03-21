import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"featureBoxBlock">

export function FeatureBoxBlock(props: Props) {
  console.log("feature", props)
  return (
    <div className="feature-box-block">
      <FeatureBoxGrid items={boxes} />
    </div>
  )
}

const boxes = [
  {
    title: "Introduksjon av Kobber",
    href: "/kom-i-gang",
    image: "https://cdn.sanity.io/images/3zv7jg7k/production/",
  },
]
