import { sanityFetch } from "@/sanity/lib/live"
import { querySideMenuData } from "@/sanity/lib/queries"
import { SideMenuGroup } from "./side-menu-group"
import { SideMenuList } from "./side-menu-list"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = {
  slug: string
}

/** Hidden on small screens. Data shown in small-screen-nav. */
export const SideMenu = async ({ slug }: Props) => {
  const { data } = await sanityFetch({
    query: querySideMenuData,
    params: { slug: `/${slug}` },
  })

  if (!data) return null
  if (!data.children) return null
  if (data.children.length === 0) return null

  const items = data.children
    .filter((x) => x && x.slug)
    .map(
      (x) =>
        ({
          ...x,
          group: x.group?.replace(/[^a-zA-Z]/g, ""),
        }) as SideMenuItem
    )

  const groups = Object.entries(
    groupBy(
      items.filter((x) => x.group),
      (x) => x.group ?? ""
    )
  )
  const ungrouped = items.filter((x) => !x.group)

  return (
    <nav className={styles["wrapper"]}>
      <div className={styles["inner-container"]}>
        {groups.length !== 0 &&
          groups.map((group, i) => <SideMenuGroup key={i} title={group[0]} items={group[1]} />)}
        {ungrouped.length !== 0 && <SideMenuList items={ungrouped} showItemDivider />}
      </div>
    </nav>
  )
}

const groupBy = <T, K extends string>(arr: T[], key: (i: T) => K) =>
  arr.reduce(
    (groups, item) => {
      ;(groups[key(item)] ||= []).push(item)
      return groups
    },
    {} as Record<K, T[]>
  )
