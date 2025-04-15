import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/live"
import { queryNavbarData } from "@/sanity/lib/queries"
import { KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { LoginButton } from "@/components/global/login-button"
import { RouterLink } from "@/components/global/router-link"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import styles from "./nav-bar.module.css"

/** Top navigation bar. Includes side bar data on small devices. */
export const NavBar = async () => {
  const { data } = await sanityFetch({
    query: queryNavbarData,
  })

  return (
    <header className={cn(styles["wrapper"], pageLayoutStyles["page-spacing"])}>
      <Link href="/">
        <KobberHeading level="div" variant="title small">
          {APP_NAME}
        </KobberHeading>
      </Link>

      <nav className={styles["inner-container"]}>
        {data?.children && (
          <ul className={styles["inner-container-links"]}>
            {data.children.map((item) =>
              item.slug && item.title ? (
                <li key={item.slug}>
                  <RouterLink href={item.slug}>{item.title}</RouterLink>
                </li>
              ) : null
            )}
          </ul>
        )}

        <LoginButton />
      </nav>

      <nav className={styles["inner-container-small-screen"]}>WIP: small screen nav</nav>
    </header>
  )
}
