"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"

/**
 * Gave up trying to use web components on the server, after many failed attempts.
 *
 * This file will wrap all kobber components in dynamic and load them client side.
 */

// export const KobberCardLayout = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberCardLayout,
//     })),
//   { ssr: false }
// )

// export const KobberCardLayoutColumnAspectRatio = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberCardLayoutColumnAspectRatio,
//     })),
//   { ssr: false }
// )

// export const KobberButton = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberButton,
//     })),
//   {
//     ssr: false,
//   }
// )

// export const KobberThemeContext = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberThemeContext,
//     })),
//   {
//     ssr: false,
//   }
// )

// export const KobberDivider = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberDivider,
//     })),
//   {
//     ssr: false,
//   }
// )

// export const KobberIconArrowRight = dynamic(
//   () =>
//     import("@gyldendal/kobber-icons/react").then((x) => ({
//       default: x.IconArrowRight,
//     })),
//   {
//     ssr: false,
//   }
// )

// export const KobberAccordion = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberAccordion,
//     })),
//   {
//     ssr: false,
//   }
// )

// export const KobberList = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberList,
//     })),
//   {
//     ssr: false,
//   }
// )

// export const KobberListItem = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberListItem,
//     })),
//   {
//     ssr: false,
//   }
// )

/** Required for showing web component icons */
export const KobberIconLoader = () => {
  useEffect(() => {
    import("@gyldendal/kobber-icons/web-components")
  }, [])

  return null
}
