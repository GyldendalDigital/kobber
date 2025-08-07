"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { KobberLink, KobberTextLink } from "@gyldendal/kobber-components/react"
import { ExternalLinkArrow } from "@gyldendal/kobber-icons/react"
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
      >
        <div slot="icon">
          {href?.startsWith("http") === true ? <ExternalLinkArrow /> : undefined}
        </div>
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
