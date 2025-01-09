"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PageMetadata } from "@/lib/metadata.utils"
import { ListItem } from "@/components/kobber-components"

export const SideNavItemLink = (item: PageMetadata) => {
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
        className="whitespace-nowrap"
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
