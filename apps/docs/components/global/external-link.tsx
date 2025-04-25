"use client"

import { KobberLink } from "@gyldendal/kobber-components/react-ssr-safe"
import { ExternalLinkArrow } from "@gyldendal/kobber-icons/react-ssr-safe"

type Props = {
  highlighted?: boolean
  href: string
  children: React.ReactNode
  disabled?: boolean
}

export const ExternalLink = (props: Props) => {
  const { href, children, disabled, highlighted } = props
  return (
    <KobberLink
      type={highlighted ? "prominent" : undefined}
      disabled={disabled}
      href={href}
      icon={<ExternalLinkArrow />}
    >
      {children}
    </KobberLink>
  )
}
