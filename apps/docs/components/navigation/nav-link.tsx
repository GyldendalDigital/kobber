import { KobberLink } from "@gyldendal/kobber-components/react-ssr-safe"
import { RouterLink } from "../global/router-link"

type LinkProps = {
  href: string
  children: React.ReactNode
  disabled?: boolean
}

export const NavLink = (props: LinkProps) => {
  const { children, ...rest } = props
  return <RouterLink {...rest}>{children}</RouterLink>
}

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}

export const NavButton = (props: ButtonProps) => {
  const { children, ...rest } = props
  return <KobberLink {...rest}>{children}</KobberLink>
}
