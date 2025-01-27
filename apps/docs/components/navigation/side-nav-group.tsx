"use client"

import { useState } from "react"
import { KobberAccordion } from "@gyldendal/kobber-components/react-ssr-safe"
import { toUpperCase } from "@/lib/utils"
import { NavigationGroup } from "./navigation-map"
import { SideNavList } from "./side-nav-list"
import styles from "./side-nav.module.css"

export const SideNavGroup = ({ title, items, isOpenInitially = false }: NavigationGroup) => {
  const [expanded, setExpanded] = useState(isOpenInitially)

  if (!items) return null

  return (
    <div className={styles["side-nav-group"]}>
      <KobberAccordion
        title={toUpperCase(title)}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <SideNavList items={items} />
      </KobberAccordion>
    </div>
  )
}
