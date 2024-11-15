"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { isOnPath } from "@/utils/is-on-path"
import { PageMetadata } from "@/lib/metadata.utils"
import { cn } from "@/lib/utils"

type WikiHeaderItemProps = {
  className?: string
  page: PageMetadata
}

export function WikiHeaderItem({ className, page: { title, href } }: WikiHeaderItemProps) {
  const pathName = usePathname()

  return (
    <li>
      <Link
        className={cn(
          "leading-16 text-text/ui/size/button text-[#481125] decoration-[#481125] underline-offset-8 hover:underline",
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
