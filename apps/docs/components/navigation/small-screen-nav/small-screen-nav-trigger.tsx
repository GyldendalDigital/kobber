"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { Menu, X } from "lucide-react"

export const SmallScreenNavTrigger = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    onClose()
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden", "open")
    } else {
      document.body.classList.remove("overflow-hidden", "open")
    }

    return () => {
      document.body.classList.remove("overflow-hidden", "open")
    }
  }, [isOpen])

  return isOpen ? (
    <KobberButton
      variant={"brand-primary-main"}
      icon={<X size={20} />}
      onClick={onClose}
      aria-label={"Lukk meny"}
    ></KobberButton>
  ) : (
    <KobberButton
      variant={"brand-secondary-main"}
      icon={<Menu size={20} />}
      onClick={onOpen}
      aria-label={"Åpne meny"}
    ></KobberButton>
  )
}
