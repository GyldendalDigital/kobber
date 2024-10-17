"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PageDetails } from "@/types/types"
import { cn } from "@/lib/utils"
import { KobberListItem } from "../kobber-ssr-loader"

export const SideMenuItemLink = (item: PageDetails) => {
  const pathname = usePathname()

  return (
    <Link role="menuitem" href={item.status !== "kommer" && item.href ? item.href : "#"}>
      <KobberListItem
        {...{
          disabled: item.status === "kommer" ? "" : undefined,
          active: item.href === pathname ? "" : undefined,
        }}
      >
        {item.title as string}

        {/* Temporary label */}
        {item.status ? (
          <small
            slot="icon"
            className={cn("text-button/background/color/carmine/main/primary/fallback")}
          >
            {item.status}
          </small>
        ) : null}
      </KobberListItem>
    </Link>
  )
}
