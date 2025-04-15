"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { tryAddSanityHref } from "@/utils/sanity-temp-href"
import { KobberListItem } from "@gyldendal/kobber-components/react-ssr-safe"
import { cn } from "@/lib/utils"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = {
  item: SideMenuItem
}

export const SideMenuListItemLink = (props: Props) => {
  const { item } = props
  const pathname = usePathname()
  const tempHref = tryAddSanityHref(pathname, item.slug ?? "")
  return (
    <Link
      role="menuitem"
      href={item.status !== "Kommer" && item.slug ? tempHref : "#"}
      className="cursor-default"
    >
      <KobberListItem
        className={cn("whitespace-nowrap")}
        disabled={item.status === "Kommer" ? true : undefined}
        active={tryAddSanityHref(pathname, item.slug ?? "") === pathname ? true : undefined}
        // temp label
        icon={
          item.status ? <small className="lowercase text-[#dc134fff]">{item.status}</small> : null
        }
      >
        {item.title as string}
      </KobberListItem>
    </Link>
  )
}
