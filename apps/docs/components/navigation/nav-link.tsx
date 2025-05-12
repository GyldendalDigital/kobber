import { HTMLElement } from "@lit-labs/ssr-dom-shim"
import { RouterLink } from "../global/router-link"

globalThis.HTMLElement ??= HTMLElement

type LinkProps = {
  href: string
  children: React.ReactNode
  disabled?: boolean
}

export const NavLink = (props: LinkProps) => {
  const { children, ...rest } = props
  return <RouterLink {...rest}>{children}</RouterLink>
}
