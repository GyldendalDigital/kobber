import { APP_NAME } from "@/lib/constants"
import { KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import Link from "next/link"
import { LoginButton } from "../global/login-button"
import { NavLink } from "./nav-link"
import { SmallScreenNav } from "./small-screen-nav"
import { cn } from "@/lib/utils"
import { metaBrand } from "@/app/(routes)/merkevare/brand.meta"
import { metaComponents } from "@/app/(routes)/komponenter/components.meta"
import { metaGettingStarted } from "@/app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaTokens } from "@/app/(routes)/tokens/tokens.meta"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import styles from "./top-nav.module.css"

const mainRoutes = [metaGettingStarted, metaBrand, metaTokens, metaComponents]

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
