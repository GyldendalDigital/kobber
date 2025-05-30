import { ComponentPropsWithRef } from "react"
import { KobberList } from "@gyldendal/kobber-components/react"
import { cn } from "@/lib/utils"
import { SideMenuListItem } from "./side-menu-list-item"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = Omit<ComponentPropsWithRef<typeof KobberList>, "orientation"> & {
  slug: string
  items: SideMenuItem[]
  showItemDivider?: boolean
}

export const SideMenuList = (props: Props) => {
  const { items, showItemDivider, slug, ...rest } = props
  return (
    <KobberList
      {...rest}
      orientation="vertical"
      className={cn(showItemDivider && styles["list-divider"], rest.className)}
    >
      {items.map((item, i) => (
        <SideMenuListItem key={i} item={item} slug={slug} />
      ))}
    </KobberList>
  )
}
