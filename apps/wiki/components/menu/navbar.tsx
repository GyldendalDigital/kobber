import Link from "next/link"
import { KobberHeading, KobberLink } from "@gyldendal/kobber-components/react-ssr-safe"
import { APP_NAME } from "@/lib/constants"
import { metaGettingStarted } from "@/app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaComponents } from "@/app/(routes)/komponenter/components.meta"
import { metaBrand } from "@/app/(routes)/merkevare/brand.meta"
import { LoginButton } from "../global/login-button"
import { NavbarSmallScreenMenu } from "./navbar-small-screen-menu"
import styles from "./navbar.module.css"

const mainRoutes = [metaGettingStarted, metaBrand, metaComponents]

/** Top bar. Includes side bar on small devices. */
export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <KobberHeading level="span" variant="title medium">
          {APP_NAME}
        </KobberHeading>
      </Link>

      <nav className={styles["nav-large-screen"]}>
        <ul className={styles["nav-links"]}>
          {mainRoutes.map((route) => (
            <li key={route.href}>
              <KobberLink href={route.href}>{route.title as string}</KobberLink>
            </li>
          ))}
        </ul>

        <LoginButton />
      </nav>

      <nav className={styles["nav-small-screen"]}>
        <NavbarSmallScreenMenu />
      </nav>
    </header>
  )
}
