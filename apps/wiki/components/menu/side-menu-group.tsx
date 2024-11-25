"use client"

import { PageMetadata } from "@/lib/metadata.utils"
import { toUpperCase } from "@/lib/utils"
import { Accordion, Divider, List } from "@/components/kobber-components"
import { SideMenuItem } from "./side-menu-item"

export type SideMenuGroupProps = {
  title: string
  items: PageMetadata[]
  isOpenInitially?: boolean
}

export const SideMenuGroup = ({ title, items, isOpenInitially = false }: SideMenuGroupProps) => {
  if (!items) return null

  return (
    <>
      <Accordion title={toUpperCase(title)} expanded={isOpenInitially}>
        <List orientation="vertical">
          {items.map((item, i) => (
            <SideMenuItem key={item.href + i} {...item} />
          ))}
        </List>
      </Accordion>
      <Divider />
    </>
  )
}
