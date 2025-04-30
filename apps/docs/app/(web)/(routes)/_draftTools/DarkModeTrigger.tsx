"use client"

import { useState } from "react"
import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"
import { Moon, Sun } from "lucide-react"
import { getCookieValue, setCookie } from "@/lib/clientCookies"

export const DarkModeTrigger = () => {
  const [colorScheme, setColorScheme] = useState(getCookieValue("color-scheme") ?? "default")
  console.log("colorScheme", colorScheme, document.cookie)
  const oppositeMode = colorScheme === "dark" ? "default" : "dark"

  const handleClick = () => {
    setColorScheme(oppositeMode)
    setCookie("color-scheme", oppositeMode)
    window.location.reload()
  }

  const kobberTheme = `kobber-theme-${oppositeMode}`

  return (
    <KobberButton
      variant="brand-primary-main"
      className={kobberTheme}
      icon={colorScheme === "dark" ? <Sun /> : <Moon />}
      onClick={handleClick}
      title={`Skru ${colorScheme === "dark" ? "av" : "på"} dark mode`}
    />
  )
}
