"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { KobberButton, KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import { Menu, X } from "lucide-react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { pageLayoutTempFix } from "@/styles/page-layout-temp-fix"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { metaGettingStarted } from "@/app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaBrand, metaBrandNavigationGroups } from "@/app/(routes)/merkevare/brand.meta"
import { LoginButton } from "../global/login-button"
import { IconArrowLeft } from "../kobber-icons"
import { NavButton, NavLink } from "./nav-link"
import { Props as SideNavGroupProps } from "./side-nav-group"
import styles from "./small-screen-nav.module.css"

const findNavigationGroup = (pathname: string) => {
  return metaBrandNavigationGroups?.find((group) =>
    group.items.some((item) => pathname.includes(item.href))
  ) satisfies SideNavGroupProps | undefined
}

export const SmallScreenNav = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBrandNavigationGroup, setSelectedBrandNavigationGroup] = useState<
    SideNavGroupProps | undefined
  >()

  const onOpen = () => {
    document.body.classList.add("overflow-hidden", "fixed")
    setIsOpen(true)
    setSelectedBrandNavigationGroup(findNavigationGroup(pathname))
  }

  const onClose = () => {
    document.body.classList.remove("overflow-hidden", "fixed")
    setIsOpen(false)
    setSelectedBrandNavigationGroup(undefined)
  }

  useEffect(() => {
    onClose()
  }, [pathname])

  return (
    <div className={styles["small-screen-nav"]}>
      {/* Trigger */}
      <KobberButton
        className={styles["small-screen-nav-trigger"]}
        variant="main"
        color={isOpen ? "carmine" : "aubergine"}
        icon={isOpen ? <X className="text-white" size={20} /> : <Menu size={20} />}
        onClick={isOpen ? onClose : onOpen}
      ></KobberButton>

      {/* Overlay */}
      {isOpen &&
        createPortal(
          selectedBrandNavigationGroup ? (
            <div
              className={cn(
                styles["small-screen-nav-overlay"],
                pageLayoutStyles["page-spacing"],
                pageLayoutTempFix
              )}
            >
              {/* Breadcrumbs */}
              <div className={styles["small-screen-nav-overlay-back-button"]}>
                <NavButton
                  onClick={() => setSelectedBrandNavigationGroup(undefined)}
                  extendedColor="default"
                >
                  <IconArrowLeft size={16} />
                  {metaBrand.title as string} / {selectedBrandNavigationGroup?.title}
                </NavButton>
              </div>

              {selectedBrandNavigationGroup?.items?.some(
                (group) => group.children && group.children.length > 0
              ) ? (
                <ul className={styles["small-screen-nav-overlay-link-list-outer"]}>
                  {/* Sub level group navigation with headings */}
                  {selectedBrandNavigationGroup.items?.map((group) => (
                    <li key={group.title as string}>
                      <KobberHeading level="span" variant="title medium">
                        {group.title as string}
                      </KobberHeading>
                      <ul className={styles["small-screen-nav-overlay-link-list-inner"]}>
                        {group?.children?.map((child) => (
                          <li
                            key={child.href}
                            className={styles["small-screen-nav-overlay-link-list-inner-item"]}
                          >
                            <NavLink href={child.href}>{child.title as string}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={styles["small-screen-nav-overlay-link-list-inner"]}>
                  {/* Top level group navigation with only links */}
                  {selectedBrandNavigationGroup?.items?.map((child) => (
                    <li
                      key={child.title as string}
                      className={styles["small-screen-nav-overlay-link-list-inner-item"]}
                    >
                      <NavLink href={child.href} disabled={child.status === "kommer"}>
                        {child.title as string}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div
              className={cn(
                styles["small-screen-nav-overlay"],
                pageLayoutStyles["page-spacing"],
                pageLayoutTempFix
              )}
            >
              {/* Top level navigation: no brand group selected */}
              <ul className={styles["small-screen-nav-overlay-link-list-outer"]}>
                <li>
                  <KobberHeading level="span" variant="title medium">
                    {metaGettingStarted.title as string}
                  </KobberHeading>
                  <ul className={styles["small-screen-nav-overlay-link-list-inner"]}>
                    {metaGettingStarted?.children?.map((child) => (
                      <li
                        key={child.href}
                        className={styles["small-screen-nav-overlay-link-list-inner-item"]}
                      >
                        <NavLink href={child.href}>{child.title as string}</NavLink>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <KobberHeading level="span" variant="title medium">
                    {metaBrand.title as string}
                  </KobberHeading>
                  <ul className={styles["small-screen-nav-overlay-link-list-inner"]}>
                    {metaBrandNavigationGroups?.map((child) => (
                      <li
                        key={child.title}
                        className={styles["small-screen-nav-overlay-link-list-inner-item"]}
                      >
                        <NavButton onClick={() => setSelectedBrandNavigationGroup(child)}>
                          {child.title as string}
                        </NavButton>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>

              <div className={styles["small-screen-nav-overlay-login-button"]}>
                <LoginButton />
              </div>
            </div>
          ),
          document.body
        )}
    </div>
  )
}
