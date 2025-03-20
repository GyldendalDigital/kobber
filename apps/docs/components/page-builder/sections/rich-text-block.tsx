import type { PagebuilderType } from "../page-builder.types"
import { RichText } from "../rich-text"

type Props = PagebuilderType<"richTextBlock">

export function RichTextBlock(props: Props) {
  return (
    <div className="rich-text">
      <RichText richText={props?.richText} className="text-base font-normal md:text-lg" />
    </div>
  )
}
