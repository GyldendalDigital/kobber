"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { Menu, X } from "lucide-react"
import styles from "./navbar-small-screen-menu.module.css"

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
      {isOpen && (
        <div className={styles["navbar-small-screen-menu-overlay"]}>
          <ul className="">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
