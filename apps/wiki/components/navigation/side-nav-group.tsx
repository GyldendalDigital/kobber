"use client"
import { KobberAccordion, KobberList } from "@gyldendal/kobber-components/react-ssr-safe"
import { PageMetadata } from "@/lib/metadata.utils"
import { toUpperCase } from "@/lib/utils"
import { SideNavItem } from "./side-nav-item"
import styles from "./side-nav.module.css"

export type Props = {
  title: string
  items: PageMetadata[]
  isOpenInitially?: boolean
}

export const SideNavGroup = ({ title, items, isOpenInitially = false }: Props) => {
  if (!items) return null

  return (
    <div className={styles["side-nav-group"]}>
      <KobberAccordion title={toUpperCase(title)} defaultExpanded={isOpenInitially}>
        <KobberList orientation="vertical">
          {items.map((item, i) => (
            <SideNavItem key={item.href + i} {...item} />
          ))}
        </KobberList>
      </KobberAccordion>
    </div>
  )
}
