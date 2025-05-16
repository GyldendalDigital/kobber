import { HTMLElement } from "@lit-labs/ssr-dom-shim"
import type { PagebuilderType } from "../page-builder.types"
import { RichText } from "../rich-text"

globalThis.HTMLElement ??= HTMLElement

type Props = PagebuilderType<"richTextBlock">

export function RichTextBlock(props: Props) {
  return <RichText richText={props?.richText} />
}
