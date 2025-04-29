import { sanityFetch } from "@/sanity/lib/live"
import { querySideMenuData } from "@/sanity/lib/queries"
import { stegaClean } from "next-sanity"
import { groupBy } from "@/lib/utils"
import { SideMenuGroup } from "./side-menu-group"
import { SideMenuList } from "./side-menu-list"
import styles from "./side-menu.module.css"

type Props = {
  rootSlug: string
  slug: string
}

/** Hidden on small screens. Data shown in small-screen-nav. */
export const SideMenu = async ({ rootSlug, slug }: Props) => {
  const { data } = await sanityFetch({
    query: querySideMenuData,
    params: { slug: rootSlug },
  })

  if (!data) return null
  if (!data.children) return null
  if (data.children.length === 0) return null

  const allItems = data.children.filter((x) => x && x.slug)

  const groups = Object.entries(
    groupBy(
      allItems.filter((x) => x.group),
      (x) => stegaClean(x.group) ?? ""
    )
  )

  const ungrouped = allItems.filter((x) => !x.group)

  return (
    <nav className={styles["wrapper"]}>
      <div className={styles["inner-container"]}>
        {groups.length !== 0 &&
          groups.map((group, i) => (
            <SideMenuGroup key={i} title={group[0]} items={group[1]} slug={slug} />
          ))}

        {ungrouped.length !== 0 && <SideMenuList items={ungrouped} slug={slug} showItemDivider />}
      </div>
    </nav>
  )
}
