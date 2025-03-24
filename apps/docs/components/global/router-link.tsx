"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { KobberLink, KobberTextLink } from "@gyldendal/kobber-components/react-ssr-safe"
import { cn } from "@/lib/utils"

type Props = {
  highlighted?: boolean
  href: string
  children: React.ReactNode
  disabled?: boolean
}

export const RouterLink = (props: Props) => {
  const { href, children, disabled, highlighted } = props
  const pathname = usePathname()
  return (
    <Link href={href} passHref legacyBehavior>
      <KobberLink
        type={highlighted ? "prominent" : undefined}
        disabled={disabled}
        className={cn({ active: pathname === href })}
        href={href}
        icon={href?.startsWith("http") === true ? "external_link_arrow" : undefined}
      >
        {children}
      </KobberLink>
    </Link>
  )
}

export const RouterTextLink = (props: Props) => {
  const { href, children, disabled } = props
  const pathname = usePathname()
  return (
    <Link href={href} passHref legacyBehavior>
      <KobberTextLink disabled={disabled} className={cn({ active: pathname === href })} href={href}>
        {children}
      </KobberTextLink>
    </Link>
  )
}
