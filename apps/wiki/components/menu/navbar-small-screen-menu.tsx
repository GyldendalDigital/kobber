"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { KobberButton, KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import { IconArrowLeft } from "@gyldendal/kobber-icons/react"
import { Menu, X } from "lucide-react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { metaGettingStarted } from "@/app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaComponents } from "@/app/(routes)/komponenter/components.meta"
import { metaBrand, metaBrandNavigationGroups } from "@/app/(routes)/merkevare/brand.meta"
import { LoginButton } from "../global/login-button"
import { RouterLink } from "../global/router-link"
import { IconArrowRight } from "../kobber-icons"
import styles from "./navbar-small-screen-menu.module.css"
import { SideMenuGroupProps } from "./side-menu-group"

type Props = {
  cta?: boolean
  textSuffix?: string
}

const findBrandNavigationGroup = (pathname: string) => {
  return metaBrandNavigationGroups?.find((group) =>
    group.items.some((item) => pathname.includes(item.href))
  )
}

export const NavbarSmallScreenMenu = (props: Props) => {
  const { cta, textSuffix = "" } = props
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBrandNavigationGroup, setSelectedBrandNavigationGroup] = useState<
    SideMenuGroupProps | undefined
  >(findBrandNavigationGroup(pathname))

  const handleToggle = () => {
    setIsOpen(!isOpen)
    // prevent scrolling when menu is open
    document.body.classList.toggle("overflow-y-hidden")
  }

  const handleBrandNavigation = (group: SideMenuGroupProps | undefined) => {
    setSelectedBrandNavigationGroup(group)
  }

  return (
    <div className={styles["navbar-small-screen-menu"]}>
      {/* Trigger */}
      <KobberButton
        className={styles["navbar-small-screen-menu-trigger"]}
        variant="main"
        color={isOpen ? "carmine" : "aubergine"}
        icon={isOpen ? <X className="text-white" size={20} /> : <Menu size={20} />}
        onClick={handleToggle}
      ></KobberButton>

      {/* Overlay */}
      {isOpen &&
        createPortal(
          selectedBrandNavigationGroup ? (
            <div className={styles["navbar-small-screen-menu-overlay"]}>
              {/* Breadcrumbs */}
              <div className={styles["navbar-small-screen-menu-overlay-back-button"]}>
                <KobberButton
                  color="aubergine"
                  level="secondary"
                  onClick={() => handleBrandNavigation(undefined)}
                >
                  <IconArrowLeft />
                  {metaBrand.title} / {selectedBrandNavigationGroup?.title}
                </KobberButton>
              </div>

              {selectedBrandNavigationGroup?.items?.some(
                (group) => group.children && group.children.length > 0
              ) ? (
                <ul className={styles["navbar-small-screen-menu-overlay-link-list-outer"]}>
                  {/* Sub level group navigation with headings */}
                  {selectedBrandNavigationGroup.items?.map((group) => (
                    <li>
                      <KobberHeading level="span" variant="title medium">
                        {group.title as string}
                      </KobberHeading>
                      <ul className={styles["navbar-small-screen-menu-overlay-link-list-inner"]}>
                        {group?.children?.map((child) => (
                          <li
                            key={child.href}
                            className={
                              styles["navbar-small-screen-menu-overlay-link-list-inner-item"]
                            }
                          >
                            <RouterLink href={child.href}>
                              {child.title as string}
                              <IconArrowRight />
                            </RouterLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={styles["navbar-small-screen-menu-overlay-link-list-inner"]}>
                  {/* Top level group navigation with only links */}
                  {selectedBrandNavigationGroup?.items?.map((child) => (
                    <li
                      key={child.title as string}
                      className={styles["navbar-small-screen-menu-overlay-link-list-inner-item"]}
                    >
                      <RouterLink href={child.href} disabled={child.status === "kommer"}>
                        {child.title as string}
                        {child.status !== "kommer" && <IconArrowRight />}
                      </RouterLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className={styles["navbar-small-screen-menu-overlay"]}>
              {/* Top level navigation: no brand group selected */}
              <ul className={styles["navbar-small-screen-menu-overlay-link-list-outer"]}>
                <li>
                  <KobberHeading level="span" variant="title medium">
                    {metaGettingStarted.title as string}
                  </KobberHeading>
                  <ul className={styles["navbar-small-screen-menu-overlay-link-list-inner"]}>
                    {metaGettingStarted?.children?.map((child) => (
                      <li
                        key={child.href}
                        className={styles["navbar-small-screen-menu-overlay-link-list-inner-item"]}
                      >
                        <RouterLink href={child.href}>
                          {child.title as string}
                          <IconArrowRight />
                        </RouterLink>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <KobberHeading level="span" variant="title medium">
                    {metaBrand.title as string}
                  </KobberHeading>
                  <ul className={styles["navbar-small-screen-menu-overlay-link-list-inner"]}>
                    {metaBrandNavigationGroups?.map((child) => (
                      <li
                        key={child.title}
                        className={styles["navbar-small-screen-menu-overlay-link-list-inner-item"]}
                      >
                        <KobberButton
                          color="aubergine"
                          level="secondary"
                          onClick={() => handleBrandNavigation(child)}
                        >
                          {child.title as string}
                          <IconArrowRight />
                        </KobberButton>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <KobberHeading level="span" variant="title medium">
                    <RouterLink href={metaComponents.href}>
                      {metaComponents.title as string}
                    </RouterLink>
                  </KobberHeading>
                </li>
              </ul>

              <div className={styles["navbar-small-screen-menu-overlay-login-button"]}>
                <LoginButton />
              </div>
            </div>
          ),
          document.body
        )}
    </div>
  )
}
