"use client"

import { useEffect } from "react"

/** Required for showing web component icons (ie. in accordion or carousel) */
export const IconLoader = () => {
  useEffect(() => {
    import("@gyldendal/kobber-icons/web-components")
  }, [])

  return null
}
