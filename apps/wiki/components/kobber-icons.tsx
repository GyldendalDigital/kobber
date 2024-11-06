"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

export const IconArrowRight = dynamic(
  () =>
    import("@gyldendal/kobber-icons/react").then((x) => ({
      default: x.IconArrowRight,
    })),
  { loading: () => <Loader2 className="size-4 animate-spin" />, ssr: false }
)
export const IconLogout = dynamic(
  () =>
    import("@gyldendal/kobber-icons/react").then((x) => ({
      default: x.IconLogout,
    })),
  { loading: () => <Loader2 className="size-4 animate-spin" />, ssr: false }
)
export const IconLogin = dynamic(
  () =>
    import("@gyldendal/kobber-icons/react").then((x) => ({
      default: x.IconLogin,
    })),
  { loading: () => <Loader2 className="size-4 animate-spin" />, ssr: false }
)

/** Required for showing web component icons */
export const IconLoader = () => {
  useEffect(() => {
    import("@gyldendal/kobber-icons/web-components")
  }, [])

  return null
}
