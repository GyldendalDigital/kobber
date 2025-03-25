import type { PagebuilderType } from "../page-builder.types"
import { RichText } from "../rich-text"

type Props = PagebuilderType<"richTextBlock">

export function RichTextBlock(props: Props) {
  return (
    <div className="rich-text-block flex flex-col gap-4">
      <RichText richText={props?.richText} />
    </div>
  )
}
