import { KobberList } from "@gyldendal/kobber-components/react-ssr-safe"
import { cn } from "@/lib/utils"
import { NavigationGroup } from "./navigation-map"
import { SideNavItem } from "./side-nav-item"
import styles from "./side-nav.module.css"

type Props = Pick<NavigationGroup, "items"> & {
  showItemDivider?: boolean
}

export const SideNavList = ({ items, showItemDivider }: Props) => {
  if (!items) return null

  return (
    <KobberList
      orientation="vertical"
      className={cn(showItemDivider && styles["side-nav-list-with-divider"])}
    >
      {items.map((item, i) => (
        <SideNavItem key={item.href + i} {...item} />
      ))}
    </KobberList>
  )
}
