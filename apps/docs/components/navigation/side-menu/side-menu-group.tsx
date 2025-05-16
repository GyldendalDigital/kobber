"use client"

import { useState } from "react"
import { KobberAccordion } from "@gyldendal/kobber-components/react"
import { toUpperCase } from "@/lib/utils"
import { SideMenuList } from "./side-menu-list"
import styles from "./side-menu.module.css"
import { SideMenuItem } from "./side-menu.types"

type Props = {
  slug: string
  title: string
  items: SideMenuItem[]
}

export const SideMenuGroup = (props: Props) => {
  const { title, items, slug } = props
  const initiallyExpanded = items.some(
    (item) => item.slug === slug || item.children?.some((x) => x.slug === slug)
  )
  const [expanded, setExpanded] = useState(initiallyExpanded)

  return (
    <div className={styles["group-divider"]}>
      <KobberAccordion
        title={toUpperCase(title)}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <SideMenuList items={items} slug={slug} />
      </KobberAccordion>
    </div>
  )
}
