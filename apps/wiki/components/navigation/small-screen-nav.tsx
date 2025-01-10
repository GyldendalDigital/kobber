"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { KobberButton, KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import { Menu, X } from "lucide-react"
import { createPortal } from "react-dom"
import { metaGettingStarted } from "@/app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaComponents } from "@/app/(routes)/komponenter/components.meta"
import { metaBrand, metaBrandNavigationGroups } from "@/app/(routes)/merkevare/brand.meta"
import { LoginButton } from "../global/login-button"
import { RouterLink } from "../global/router-link"
import { IconArrowLeft, IconArrowRight } from "../kobber-icons"
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
    document.body.classList.add("overflow-y-hidden")
    setIsOpen(true)
    setSelectedBrandNavigationGroup(findNavigationGroup(pathname))
  }

  const onClose = () => {
    document.body.classList.remove("overflow-y-hidden")
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
            <div className={styles["small-screen-nav-overlay"]}>
              {/* Breadcrumbs */}
              <div className={styles["small-screen-nav-overlay-back-button"]}>
                <KobberButton
                  color="aubergine"
                  level="secondary"
                  onClick={() => setSelectedBrandNavigationGroup(undefined)}
                >
                  <IconArrowLeft />
                  {metaBrand.title} / {selectedBrandNavigationGroup?.title}
                </KobberButton>
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
                <ul className={styles["small-screen-nav-overlay-link-list-inner"]}>
                  {/* Top level group navigation with only links */}
                  {selectedBrandNavigationGroup?.items?.map((child) => (
                    <li
                      key={child.title as string}
                      className={styles["small-screen-nav-overlay-link-list-inner-item"]}
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
            <div className={styles["small-screen-nav-overlay"]}>
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
                  <ul className={styles["small-screen-nav-overlay-link-list-inner"]}>
                    {metaBrandNavigationGroups?.map((child) => (
                      <li
                        key={child.title}
                        className={styles["small-screen-nav-overlay-link-list-inner-item"]}
                      >
                        <KobberButton
                          color="aubergine"
                          level="secondary"
                          onClick={() => setSelectedBrandNavigationGroup(child)}
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
                    <Link
                      href={metaComponents.href}
                      className="block border-b border-transparent hover:border-current"
                    >
                      {metaComponents.title as string}
                    </Link>
                  </KobberHeading>
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
