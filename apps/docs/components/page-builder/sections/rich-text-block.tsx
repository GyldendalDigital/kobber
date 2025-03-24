import type { PagebuilderType } from "../page-builder.types"
import { RichText } from "../rich-text"

type Props = PagebuilderType<"richTextBlock">

export function RichTextBlock(props: Props) {
  return (
    <div className="rich-text-block">
      <RichText richText={props?.richText} />
    </div>
  )
}
