import { KobberTextWrapper } from "@gyldendal/kobber-components/react-ssr-safe"
import type { PagebuilderType } from "../page-builder.types"
import { RichText } from "../rich-text"

type Props = PagebuilderType<"richTextBlock">

export function RichTextBlock(props: Props) {
  return (
    <KobberTextWrapper>
      <RichText richText={props?.richText} />
    </KobberTextWrapper>
  )
}
