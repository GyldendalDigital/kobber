"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

export const RouterLink = (props: Props) => {
  const { href, children, disabled, onClick } = props
  const pathname = usePathname()
  return (
    <Link href={href} passHref legacyBehavior>
      <KobberButton
        color="aubergine"
        level="secondary"
        disabled={disabled}
        className={cn({ active: pathname === href })}
        href={href}
        onClick={onClick}
      >
        {children}
      </KobberButton>
    </Link>
  )
}
