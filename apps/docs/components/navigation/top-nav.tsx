import Link from "next/link"
import { KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { LoginButton } from "../global/login-button"
import { NavLink } from "./nav-link"
import { mainRoutes } from "./navigation-map"
import { SmallScreenNav } from "./small-screen-nav"
import styles from "./top-nav.module.css"

/** Main navigation bar. Includes side bar data on small devices. */
export const TopNav = () => {
  return (
    <header className={cn(styles["top-nav"], pageLayoutStyles["page-spacing"])}>
      <Link href="/">
        <KobberHeading level="div" variant="title small">
          {APP_NAME}
        </KobberHeading>
      </Link>

      <nav className={styles["top-nav-large-screen"]}>
        <ul className={styles["top-nav-large-screen-links"]}>
          {mainRoutes.map((route) => (
            <li key={route.href}>
              <NavLink href={route.href}>{route.title as string}</NavLink>
            </li>
          ))}
        </ul>

        <LoginButton />
      </nav>

      <nav className={styles["top-nav-small-screen"]}>
        <SmallScreenNav />
      </nav>
    </header>
  )
}
