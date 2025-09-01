import Link from "next/link"
import { ListItem } from "@gyldendal/kobber-components/react"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = {
  slug: string
  item: SideMenuItem
}

export const SideMenuListItemLink = (props: Props) => {
  const { item, slug } = props
  return (
    <Link role="menuitem" href={item.status !== "Kommer" && item.slug ? item.slug : "#"}>
      <ListItem
        disabled={item.status === "Kommer" ? true : undefined}
        active={item.slug === slug ? true : undefined}
      >
        <div slot="icon">
          {item.status ? <small className={styles["list-label"]}>{item.status}</small> : null}
        </div>
        {item.title as string}
      </ListItem>
    </Link>
  )
}
