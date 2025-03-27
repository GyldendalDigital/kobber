import type { PagebuilderType } from "../page-builder.types"
import { RichText } from "../rich-text"
import styles from "./rich-text-block.module.css"

type Props = PagebuilderType<"richTextBlock">

export function RichTextBlock(props: Props) {
  return (
    <div className={styles["rich-text-block"]}>
      <RichText richText={props?.richText} />
    </div>
  )
}
