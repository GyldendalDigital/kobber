"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { isOnPath } from "@/utils/is-on-path"
import { PageDetails } from "@/types/types"
import { cn } from "@/lib/utils"

type WikiHeaderItemProps = {
  className?: string
  page: PageDetails
}

export function WikiHeaderItem({
  className,
  page: { title, href, disabled },
}: WikiHeaderItemProps) {
  const pathName = usePathname()

  return (
    <li>
      <Link
        className={cn(
          "leading-16 text-text/ui/size/button text-[#481125] decoration-[#481125] underline-offset-8 hover:underline",
          className,
          {
            underline: pathName && isOnPath(pathName, href),
            "cursor-not-allowed opacity-50 hover:no-underline": disabled,
          }
        )}
        href={disabled ? "#" : href}
      >
        {title as string}
      </Link>
    </li>
  )
}
