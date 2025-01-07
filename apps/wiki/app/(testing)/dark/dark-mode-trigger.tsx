"use client"

import { useState } from "react"
import { KobberButton } from "@gyldendal/kobber-components/react-ssr-safe"

type Props = {
  mode: "dark" | "default"
}

export const DarkModeTrigger = ({ mode }: Props) => {
  const [colorScheme, setColorScheme] = useState<string>(mode)
  const oppositeMode = colorScheme === "dark" ? "default" : "dark"

  const handleClick = () => {
    setColorScheme(oppositeMode)
    setCookie({ mode: oppositeMode })
    window.location.reload()
  }

  const kobberTheme = `kobber-theme-${oppositeMode}`

  return (
    <div className="flex max-w-md flex-col items-center justify-center gap-8">
      <p className="">
        For å lettere se hvor vi har glemt å bruke tokens laget vi en fake dark mode der alle farger
        er invertert.
      </p>
      <KobberButton className={kobberTheme} onClick={handleClick}>
        Skru på {oppositeMode} mode
      </KobberButton>
    </div>
  )
}

const setCookie = ({ mode }: Props) => {
  document.cookie = "color-scheme=" + mode + ";Path=/"
}
