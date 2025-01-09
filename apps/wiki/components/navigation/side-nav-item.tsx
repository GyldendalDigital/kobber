"use client"

import { usePathname } from "next/navigation"
import { PageMetadata } from "@/lib/metadata.utils"
import { List } from "@/components/kobber-components"
import { SideNavItemLink } from "./side-nav-item-link"

export const SideNavItem = (item: PageMetadata) => {
  const pathname = usePathname()
  return (
    <>
      <SideNavItemLink {...item} />

      {pathname?.includes(item.href) && item.children && item.children.length !== 0 && (
        <List orientation="vertical" className="pl-[20px]">
          {item.children.map((item) => (
            <SideNavItem key={item.href} {...item} />
          ))}
        </List>
      )}
    </>
  )
}
