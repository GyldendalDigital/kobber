"use client"

import { useEffect } from "react"
import { IconArrowRight, IconLogin, IconLogout } from "@gyldendal/kobber-icons/react"

export { IconArrowRight, IconLogout, IconLogin }

/** Required for showing web component icons */
export const IconLoader = () => {
  useEffect(() => {
    import("@gyldendal/kobber-icons/web-components")
  }, [])

  return null
}
