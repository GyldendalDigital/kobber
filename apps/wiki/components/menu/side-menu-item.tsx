"use client"

import { usePathname } from "next/navigation"
import { PageDetails } from "@/types/types"
import { KobberList, KobberListItem } from "../kobber-ssr-loader"
import { SideMenuItemLink } from "./side-menu-item-link"

export const SideMenuItem = (item: PageDetails) => {
  const pathname = usePathname()
  return (
    <KobberListItem>
      <SideMenuItemLink {...item} />
      {pathname?.includes(item.href) && item.children && (
        <KobberList direction="vertical" className="pl-20">
          {item.children.map((item) => (
            <SideMenuItem key={item.href} {...item} />
          ))}
        </KobberList>
      )}
    </KobberListItem>
  )
}
