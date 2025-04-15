"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { tryAddSanityHref } from "@/utils/sanity-temp-href"
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
  const tempHref = tryAddSanityHref(pathname, href)
  return (
    <Link href={tempHref} passHref>
      <KobberLink
        type={highlighted ? "prominent" : undefined}
        disabled={disabled}
        className={cn({ active: pathname === tempHref })}
        href={tempHref}
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
    <Link href={href} passHref>
      <KobberTextLink disabled={disabled} className={cn({ active: pathname === href })} href={href}>
        {children}
      </KobberTextLink>
    </Link>
  )
}
