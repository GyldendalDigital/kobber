"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { isOnPath } from "@/utils/is-on-path"
import { PageDetails } from "@/types/types"
import { cn } from "@/lib/utils"

type TopMenuItemProps = {
  className?: string
  page: PageDetails
}

export function TopMenuItem({ className, page: { title, href } }: TopMenuItemProps) {
  const pathName = usePathname()

  return (
    <li>
      <Link
        className={cn(
          "leading-16 text-primary-body decoration-text/color/action-item/button underline-offset-8 hover:underline",
          className,
          {
            underline: pathName && isOnPath(pathName, href),
          }
        )}
        href={href}
      >
        {title as string}
      </Link>
    </li>
  )
}
