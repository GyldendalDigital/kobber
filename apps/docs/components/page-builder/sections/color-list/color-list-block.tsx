import { TextWrapper } from "@gyldendal/kobber-components/react"
import type { PagebuilderType } from "../../page-builder.types"
import { RichText } from "../../rich-text"
import { ColorListItem } from "./color-list-block-item"
import styles from "./color-list-block.module.css"

type Props = PagebuilderType<"colorListBlock">

export function ColorListBlock(props: Props) {
  return (
    <TextWrapper>
      <RichText richText={props?.richText} />
      <div className={styles["color-list-wrapper"]}>
        {props.colors && props.colors.map((color, i) => <ColorListItem key={i} {...color} />)}
      </div>
    </TextWrapper>
  )
}
