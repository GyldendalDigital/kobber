import { cn } from "@/lib/utils"
import type { PagebuilderType } from "../page-builder.types"
import Image from "next/image"

type Props = PagebuilderType<"heroBlock">

export function HeroBlock(props: Props) {
  const { damAsset } = props

  if (!damAsset) {
    console.warn("Hero block is missing an image")
    return null
  }

  return (
    <div className="hero">
      {damAsset?.previewUrl && <div className={cn("relative h-[30vw] max-h-80 overflow-hidden rounded-[1rem] md:h-[20vw]")}><Image
        src={damAsset.previewUrl}
        fill
        className="object-cover object-top"
        alt={""}
      /></div>}
    </div>
  )
}
