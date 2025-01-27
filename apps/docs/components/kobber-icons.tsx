// import {
//   IconArrowRight,
//   IconExternalLink,
//   IconLogin,
//   IconLogout,
// } from "@gyldendal/kobber-icons/react"

// export { IconArrowRight, IconLogout, IconLogin, IconExternalLink }

/**
 * Kobber icons are exposing HTMLElement, and crashes when used in Next.js, even with "use client".
 *
 * Using other icons for now.
 */
import { ArrowLeft, ArrowRight, ExternalLink, LogIn, LogOut } from "lucide-react"

export const IconExternalLink = () => <ExternalLink size={14} />

export {
  ArrowRight as IconArrowRight,
  ArrowLeft as IconArrowLeft,
  LogOut as IconLogout,
  LogIn as IconLogin,
}
