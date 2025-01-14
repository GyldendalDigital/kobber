"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { KobberLink } from "@gyldendal/kobber-components/react-ssr-safe"
import { cn } from "@/lib/utils"

type Props = {
  extendedColor?: "text" | "heading"
  href: string
  children: React.ReactNode
  disabled?: boolean
}

export const RouterLink = (props: Props) => {
  const { href, children, disabled, extendedColor } = props
  const pathname = usePathname()
  return (
    <Link href={href} passHref legacyBehavior>
      <KobberLink
        extendedColor={extendedColor}
        disabled={disabled}
        className={cn({ active: pathname === href })}
        href={href}
      >
        {children}
      </KobberLink>
    </Link>
  )
}
