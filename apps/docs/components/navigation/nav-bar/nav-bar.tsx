import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/live"
import { queryNavbarSmallScreenData } from "@/sanity/lib/queries"
import {
  KobberHeading,
  KobberRadioGroup,
  KobberRadioInput,
} from "@gyldendal/kobber-components/react"
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

          <KobberRadioGroup direction="vertical">
            <span className="text-[12px] uppercase text-text/color/primary/label-s">Målform</span>
            <KobberRadioInput value="bokmål" className="flex items-center gap-x-2" href="#bokmål">
              Bokmål
            </KobberRadioInput>
            <KobberRadioInput value="nynorsk" href="#nynorsk">
              Nynorsk
            </KobberRadioInput>
          </KobberRadioGroup>

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
