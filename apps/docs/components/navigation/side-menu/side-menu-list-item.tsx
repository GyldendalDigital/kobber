"use client"

import { SideMenuList } from "./side-menu-list"
import { SideMenuListItemLink } from "./side-menu-list-item-link"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = {
  item: SideMenuItem
}

export const SideMenuListItem = (props: Props) => {
  const { item } = props

  if (!item.children || item.children.length === 0) {
    return <SideMenuListItemLink item={item} />
  }

  return (
    <>
      <SideMenuListItemLink item={item} />

      {item.children && item.children.length !== 0 && (
        <SideMenuList
          items={item.children as unknown as SideMenuItem[]}
          className={styles["sub-list-spacing"]}
        />
      )}
    </>
  )
}
