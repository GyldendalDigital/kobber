import { ScrollArea } from "../ui/scroll-area"
import { NavigationGroup } from "./navigation-map"
import { SideNavGroup } from "./side-nav-group"
import { SideNavList } from "./side-nav-list"
import styles from "./side-nav.module.css"

type Props = {
  groups: NavigationGroup[]
}

/** Hidden on small screens. Data shown in small-screen-nav. */
export const SideNav = ({ groups }: Props) => {
  if (!groups || groups.length === 0) return null
  return (
    <nav className={styles["side-nav"]}>
      <ScrollArea className="h-full">
        <div className={styles["side-nav-content"]}>
          {groups.length === 1 && <SideNavList items={groups[0].items} showItemDivider />}
          {groups.length > 1 && groups.map((group, i) => <SideNavGroup key={i} {...group} />)}
        </div>
      </ScrollArea>
    </nav>
  )
}
