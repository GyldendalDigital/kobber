import { ScrollArea } from "../ui/scroll-area"
import { SideNavGroup, Props as SideNavGroupProps } from "./side-nav-group"
import styles from "./side-nav.module.css"

type Props = {
  groups: SideNavGroupProps[]
}

/** Hidden on small screens. Data shown in small-screen-nav. */
export const SideNav = ({ groups }: Props) => {
  return (
    <nav className={styles["side-nav"]}>
      <ScrollArea className="h-full">
        <div className={styles["side-nav-content"]}>
          {groups.map((group, i) => (
            <SideNavGroup key={i} {...group} />
          ))}
        </div>
      </ScrollArea>
    </nav>
  )
}
