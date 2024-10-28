"use client"

import { usePathname } from "next/navigation"
import { PageDetails } from "@/types/types"
import { List } from "@/components/kobber-ssr-loader"
import { SideMenuItemLink } from "./side-menu-item-link"

export const SideMenuItem = (item: PageDetails) => {
  const pathname = usePathname()
  return (
    <>
      <SideMenuItemLink {...item} />

      {pathname?.includes(item.href) && item.children && (
        <List orientation="vertical" className="pl-20">
          {item.children.map((item) => (
            <SideMenuItem key={item.href} {...item} />
          ))}
        </List>
      )}
    </>
  )
}
