"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { isOnPath } from "@/utils/is-on-path"
import { PageDetails } from "@/types/types"
import { cn } from "@/lib/utils"

export const SideMenuItemLink = ({ href, title, status }: PageDetails) => {
  const pathname = usePathname()
  const isComing = status === "kommer"

  return (
    <Link
      href={isComing ? "#" : href}
      className={cn(
        "line-clamp-1 flex h-48 max-w-[250px] items-center justify-between gap-8 overflow-hidden rounded-8 hover:bg-aubergine-50",
        {
          "underline decoration-wine-750 underline-offset-4": pathname && isOnPath(pathname, href),
          "opacity-50 hover:bg-transparent": isComing,
        }
      )}
    >
      <span className="mx-4 line-clamp-1 text-primary-body text-text/color/action-item/button">
        {title as string}
      </span>
      {status && (
        <span className="text-primary-label-s text-text/color/secondary/display-s">{status}</span>
      )}
    </Link>
  )
}
