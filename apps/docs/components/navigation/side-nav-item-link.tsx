"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { KobberListItem } from "@gyldendal/kobber-components/react-ssr-safe"
import { PageMetadata } from "@/lib/metadata.utils"

export const SideNavItemLink = (item: PageMetadata) => {
  const pathname = usePathname()

  return (
    <Link
      role="menuitem"
      href={item.status !== "kommer" && item.href ? item.href : "#"}
      className="cursor-default"
    >
      <KobberListItem
        className="whitespace-nowrap"
        disabled={item.status === "kommer" ? true : undefined}
        active={item.href === pathname ? true : undefined}
        // temp label
        icon={item.status ? <small className="text-[#dc134fff]">{item.status}</small> : null}
      >
        {item.title as string}
      </KobberListItem>
    </Link>
  )
}
