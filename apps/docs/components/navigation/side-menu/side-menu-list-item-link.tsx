import Link from "next/link"
import { KobberListItem } from "@gyldendal/kobber-components/react-ssr-safe"
import { cn } from "@/lib/utils"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = {
  slug: string
  item: SideMenuItem
}

export const SideMenuListItemLink = (props: Props) => {
  const { item, slug } = props
  return (
    <Link
      role="menuitem"
      href={item.status !== "Kommer" && item.slug ? item.slug : "#"}
      className="cursor-default"
    >
      <KobberListItem
        className={cn("whitespace-nowrap")}
        disabled={item.status === "Kommer" ? true : undefined}
        active={item.slug === slug ? true : undefined}
        icon={item.status ? <small className={styles["list-label"]}>{item.status}</small> : null}
      >
        {item.title as string}
      </KobberListItem>
    </Link>
  )
}
