"use client"

import { PageDetails } from "@/types/types"
import { KobberAccordion, KobberDivider, KobberList } from "../kobber-ssr-loader"
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
      <KobberAccordion title={title} expanded={isOpenInitially}>
        <KobberList direction="vertical">
          {items.map((item) => (
            <SideMenuItem key={item.href} {...item} />
          ))}
        </KobberList>
      </KobberAccordion>
      <KobberDivider />
    </>
  )
}
