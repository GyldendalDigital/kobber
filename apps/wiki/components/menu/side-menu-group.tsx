"use client"

import { useEffect } from "react"
import { PageDetails } from "@/types/types"
import {
  defineCustomElementIcons,
  KobberAccordion,
  KobberDivider,
  KobberList,
} from "../kobber-ssr-loader"
import { SideMenuItem } from "./side-menu-item"

type Props = {
  title: string
  items: PageDetails[]
  isOpenInitially?: boolean
}

export const SideMenuGroup = ({ title, items, isOpenInitially = false }: Props) => {
  useEffect(() => {
    // needed for chevrons inside accordion component
    defineCustomElementIcons()
  }, [])

  if (!items) return null

  return (
    <>
      <KobberAccordion title={title} expanded={isOpenInitially}>
        <KobberList direction="vertical">
          {items.map((item, i) => (
            <SideMenuItem key={item.href + i} {...item} />
          ))}
        </KobberList>
      </KobberAccordion>
      <KobberDivider />
    </>
  )
}
