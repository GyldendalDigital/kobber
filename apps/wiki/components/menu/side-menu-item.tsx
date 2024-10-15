"use client"

import { usePathname } from "next/navigation"
import { PageDetails } from "@/types/types"
import { SideMenuItemLink } from "./side-menu-item-link"

export const SideMenuItem = (item: PageDetails) => {
  const pathname = usePathname()
  return (
    <li>
      <SideMenuItemLink {...item} />
      {pathname?.includes(item.href) && item.children && (
        <ul className="pl-40">
          {item.children.map((item) => (
            <SideMenuItem key={item.href} {...item} />
          ))}
        </ul>
      )}
    </li>
  )
}
