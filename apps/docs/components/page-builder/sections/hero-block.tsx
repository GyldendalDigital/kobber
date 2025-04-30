import Image from "next/image"
import type { PagebuilderType } from "../page-builder.types"
import styles from "./hero-block.module.css"

type Props = PagebuilderType<"heroBlock">

export function HeroBlock(props: Props) {
  const { damAsset } = props

  if (!damAsset?.previewUrl) {
    console.warn("Hero block is missing an image")
    return null
  }

  return (
    <div className={styles["wrapper"]}>
      <Image src={damAsset.previewUrl} fill alt={""} />
    </div>
  )
}
