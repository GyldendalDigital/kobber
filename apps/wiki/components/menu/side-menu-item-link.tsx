"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PageDetails } from "@/types/types"
import { ListItem } from "@/components/kobber-ssr-loader"

export const SideMenuItemLink = (item: PageDetails) => {
  const pathname = usePathname()

  return (
    <Link
      role="menuitem"
      href={item.status !== "kommer" && item.href ? item.href : "#"}
      className="cursor-default"
    >
      <ListItem
        disabled={item.status === "kommer" ? true : undefined}
        active={item.href === pathname ? true : undefined}
      >
        {item.title as string}

        {/* Temporary label */}
        {item.status ? (
          <small slot="icon" className="text-[#dc134fff]">
            {item.status}
          </small>
        ) : null}
      </ListItem>
    </Link>
  )
}
