import { PageMetadata } from "@/lib/metadata.utils"
import { toUpperCase } from "@/lib/utils"
import { Accordion, List } from "../kobber-components-csr"
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
      <Accordion title={toUpperCase(title)} expanded={isOpenInitially}>
        <List orientation="vertical">
          {items.map((item, i) => (
            <SideNavItem key={item.href + i} {...item} />
          ))}
        </List>
      </Accordion>
    </div>
  )
}
