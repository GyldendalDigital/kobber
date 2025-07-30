"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { QueryNavbarSmallScreenDataResult } from "@/sanity/sanity.types"
import { KobberButton, KobberHeading } from "@gyldendal/kobber-components/react"
import { Menu, X } from "lucide-react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { LoginButton } from "@/components/global/login-button"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { NavLink } from "../nav-link"
import styles from "./small-screen-nav.module.css"

type Nav = Pick<NonNullable<QueryNavbarSmallScreenDataResult>, "children">

type NavigationGroup = NonNullable<Nav["children"]>[number] | undefined

export const SmallScreenNav = (props: Nav) => {
  const { children } = props
  const pathname = usePathname()
  const [selectedRoot, setSelectedRoot] = useState<NavigationGroup>(undefined)

  return (
    <div className={styles["small-screen-nav"]}>
      {/* TODO: click on items with children should open a nested sub level */}
      {/* <div className={styles["small-screen-nav-back-button"]}>
        
      </div> */}

      <ul className={styles["small-screen-nav-list"]}>
        {children?.map((child) => (
          <li key={child.slug} className={styles["small-screen-nav-list-item"]}>
            <KobberHeading level="span" element="title" size="medium">
              {child.title}
            </KobberHeading>
            <ul className={styles["small-screen-nav-link-list-inner"]}>
              {child.children?.map((child) => (
                <li key={child.slug} className={styles["small-screen-nav-link-list-inner-item"]}>
                  {child.slug && <NavLink href={child.slug}>{child.title}</NavLink>}
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <div className={styles["small-screen-nav-login-button"]}>
            <LoginButton />
          </div>
        </li>
      </ul>
    </div>
  )
}
