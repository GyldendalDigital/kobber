"use client"

import { PageDetails } from "@/types/types"
import { Accordion, Divider, List } from "../kobber-components"
import { SideMenuItem } from "./side-menu-item"

type Props = {
  title: string
  items: PageDetails[]
  isOpenInitially?: boolean
}

export const SideMenuGroup = ({ title, items, isOpenInitially = false }: Props) => {
  if (!items) return null

  return (
    <>
      <Accordion title={title} expanded={isOpenInitially}>
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
