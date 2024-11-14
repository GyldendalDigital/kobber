"use client"

import { usePathname } from "next/navigation"
import { PageMetadata } from "@/lib/metadata.utils"
import { List } from "@/components/kobber-components"
import { SideMenuItemLink } from "./side-menu-item-link"

export const SideMenuItem = (item: PageMetadata) => {
  const pathname = usePathname()
  return (
    <>
      <SideMenuItemLink {...item} />

      {pathname?.includes(item.href) && item.children && item.children.length !== 0 && (
        <List orientation="vertical" className="pl-[20px]">
          {item.children.map((item) => (
            <SideMenuItem key={item.href} {...item} />
          ))}
        </List>
      )}
    </>
  )
}
