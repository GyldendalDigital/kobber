import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/live"
import { queryNavbarSmallScreenData } from "@/sanity/lib/queries"
import { Heading } from "@gyldendal/kobber-components/react"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { LoginButton } from "@/components/global/login-button"
import { RouterLink } from "@/components/global/router-link"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { SmallScreenNav } from "../small-screen-nav/small-screen-nav"
import { SmallScreenNavTrigger } from "../small-screen-nav/small-screen-nav-trigger"
import styles from "./nav-bar.module.css"

/** Top navigation bar. Includes side bar data on small devices. */
export const NavBar = async () => {
  const { data } = await sanityFetch({
    query: queryNavbarSmallScreenData,
  })

  return (
    <header className={cn(styles["wrapper"], pageLayoutStyles["page-spacing"])}>
      <div className={styles["bar"]}>
        <Link href="/">
          <Heading level="div" element="title" size="small">
            {APP_NAME}
          </Heading>
        </Link>

        <nav className={styles["inner-container"]}>
          {data?.children && (
            <ul className={styles["inner-container-links"]}>
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.children.map((item: any) =>
                  item.slug && item.title ? (
                    <li key={item.slug}>
                      <RouterLink href={item.slug}>{item.title}</RouterLink>
                    </li>
                  ) : null
                )
              }
            </ul>
          )}

          <LoginButton />
        </nav>

        <nav className={styles["inner-container-small-screen"]}>
          <SmallScreenNavTrigger />
        </nav>
      </div>

      <div className="small-screen-nav-content">
        {data?.children && <SmallScreenNav {...data} />}
      </div>
    </header>
  )
}
