import { SideMenuList } from "./side-menu-list"
import { SideMenuListItemLink } from "./side-menu-list-item-link"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = {
  slug: string
  item: SideMenuItem
}

export const SideMenuListItem = (props: Props) => {
  const { item, slug } = props

  if (!item) {
    return null
  }

  if (
    !item.children ||
    item.children.length === 0 ||
    !item.children.some((child) => child.slug?.includes(slug))
  ) {
    return <SideMenuListItemLink item={item} slug={slug} />
  }

  return (
    <>
      <SideMenuListItemLink item={item} slug={slug} />

      <SideMenuList
        items={item.children as unknown as SideMenuItem[]}
        className={styles["sub-list-spacing"]}
        slug={slug}
      />
    </>
  )
}
