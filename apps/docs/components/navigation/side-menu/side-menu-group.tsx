"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { KobberAccordion } from "@gyldendal/kobber-components/react-ssr-safe"
import { toUpperCase } from "@/lib/utils"
import { SideMenuList } from "./side-menu-list"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = {
  title: string
  items: SideMenuItem[]
}

export const SideMenuGroup = (props: Props) => {
  const { title, items } = props
  const pathname = usePathname()
  const pathnamePrefix = pathname.replace("/fra-sanity", "").split("/").slice(0, 3).join("/")
  const slug = items.at(0)?.slug

  const [expanded, setExpanded] = useState(
    slug ? slug.startsWith(pathnamePrefix) : false
  )

  return (
    <div className={styles["group-divider"]}>
      <KobberAccordion
        title={toUpperCase(title)}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <SideMenuList items={items} />
      </KobberAccordion>
    </div>
  )
}
