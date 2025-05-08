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
