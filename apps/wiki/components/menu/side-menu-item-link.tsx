"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PageDetails } from "@/types/types"
import { cn } from "@/lib/utils"

export const SideMenuItemLink = ({ href, title, status }: PageDetails) => {
  const pathname = usePathname()
  const isComing = status === "kommer"
  return (
    <Link
      href={isComing ? "#" : href}
      className={cn("flex h-48 items-center gap-8 rounded-8 hover:bg-aubergine-50", {
        "underline decoration-wine-750 underline-offset-8": href === pathname,
        "opacity-50": isComing,
      })}
    >
      <span className="mx-4 text-primary-body text-text/color/action-item/button">
        {title as string}
      </span>
      {status && (
        <span className="text-primary-label-s text-text/color/secondary/display-s">{status}</span>
      )}
    </Link>
  )
}
