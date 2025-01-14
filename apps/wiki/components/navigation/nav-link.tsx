import { KobberLink } from "@gyldendal/kobber-components/react-ssr-safe"
import { RouterLink } from "../global/router-link"

type LinkProps = {
  href: string
  children: React.ReactNode
  disabled?: boolean
}

export const NavLink = (props: LinkProps) => {
  const { children, ...rest } = props
  return (
    <RouterLink extendedColor="text" {...rest}>
      {children}
    </RouterLink>
  )
}

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
  extendedColor?: "default" | "text" | "heading"
}

export const NavButton = (props: ButtonProps) => {
  const { children, extendedColor = "text", ...rest } = props
  return (
    <KobberLink extendedColor={extendedColor} {...rest}>
      {children}
    </KobberLink>
  )
}
