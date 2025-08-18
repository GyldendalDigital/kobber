"use client"

import { useState } from "react"
import { Button } from "@gyldendal/kobber-components/react"
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
    <Button
      color-theme="brand"
      color-level="primary"
      color-variant="main"
      className={kobberTheme}
      onClick={handleClick}
      title={`Skru ${colorScheme === "dark" ? "av" : "på"} dark mode`}
    >
      <div slot="icon">{colorScheme === "dark" ? <Sun /> : <Moon />}</div>
    </Button>
  )
}
