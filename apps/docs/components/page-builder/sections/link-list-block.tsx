import { HTMLElement } from "@lit-labs/ssr-dom-shim"
import { RouterLink } from "@/components/global/router-link"
import type { PagebuilderType } from "../page-builder.types"
import styles from "./link-list-block.module.css"

globalThis.HTMLElement ??= HTMLElement

type Props = PagebuilderType<"linkListBlock">

export function LinkListBlock(props: Props) {
  return (
    <div className={styles["wrapper"]}>
      {props.links &&
        props.links.map((link, index) => (
          <RouterLink key={index} href={link.url ?? "#"} highlighted={true}>
            {link.title}
          </RouterLink>
        ))}
    </div>
  )
}
