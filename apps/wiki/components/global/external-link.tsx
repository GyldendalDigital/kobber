import React from "react"
import Link from "next/link"
import { button as buttonCore } from "@gyldendal/kobber-components/vanilla"
import buttonStyles from "@gyldendal/kobber-components/vanilla/kobber-button.module.css"
import { IconExternalLink } from "../kobber-icons"

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => {
  const isExternal = href.startsWith("http")
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      className={[
        ...buttonCore.buttonClassNamesWithModule(buttonStyles, {
          color: "aubergine",
          level: "secondary",
          isLink: true,
          inlined: true,
        }),
        className,
      ].join(" ")}
    >
      {children}
      {isExternal && <IconExternalLink />}
    </Link>
  )
}
