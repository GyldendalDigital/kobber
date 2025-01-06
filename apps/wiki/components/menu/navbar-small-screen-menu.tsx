"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  KobberButton,
  KobberHeading,
  KobberLink,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { Menu, X } from "lucide-react"
import { createPortal } from "react-dom"
import { metaGettingStarted } from "@/app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaComponents } from "@/app/(routes)/komponenter/components.meta"
import { metaBrand } from "@/app/(routes)/merkevare/brand.meta"
import { LoginButton } from "../global/login-button"
import styles from "./navbar-small-screen-menu.module.css"

const mainRoutes = [metaGettingStarted, metaBrand, metaComponents]

type Props = {
  cta?: boolean
  textSuffix?: string
}

export const NavbarSmallScreenMenu = (props: Props) => {
  const { cta, textSuffix = "" } = props
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
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
          <div className={styles["navbar-small-screen-menu-overlay"]}>
            <ul className={styles["navbar-small-screen-menu-overlay-link-list-outer"]}>
              {mainRoutes.map((route) => (
                <li key={route.href}>
                  <KobberHeading level="span" variant="title medium">
                    {route.title as string}
                    {route.children && route.children.length > 0 && (
                      <ul className={styles["navbar-small-screen-menu-overlay-link-list-inner"]}>
                        {route.children.map((child) => (
                          <li>
                            <KobberLink key={child.href} href={child.href}>
                              {child.title as string}
                            </KobberLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </KobberHeading>
                </li>
              ))}
            </ul>

            <div>
              <LoginButton />
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
