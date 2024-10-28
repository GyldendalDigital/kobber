"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PageDetails } from "@/types/types"
import { cn } from "@/lib/utils"
import { ListItem } from "../kobber-components"

export const SideMenuItemLink = (item: PageDetails) => {
  const pathname = usePathname()

  return (
    <Link role="menuitem" href={item.status !== "kommer" && item.href ? item.href : "#"}>
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
