"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import { FeatureBoxGridSkeleton } from "./feature-box-grid"

/**
 * Gave up trying to use web components on the server, after many failed attempts.
 *
 * This file will wrap all kobber components in dynamic and load them client side.
 */

export const CardLayout = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberCardLayout,
    })),
  {
    loading: () => (
      <div className="flex items-center justify-between gap-4">
        <FeatureBoxGridSkeleton />
        <FeatureBoxGridSkeleton />
        <FeatureBoxGridSkeleton />
        <FeatureBoxGridSkeleton />
      </div>
    ),
    ssr: false,
  }
)

export const CardLayoutToColumnAspectRatio = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberCardLayoutColumnAspectRatio,
    })),
  {
    ssr: false,
  }
)

export const CardLayoutColumnAspectRatio = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberCardLayoutColumnAspectRatio,
    })),
  { ssr: false }
)

export const Button = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberButton,
    })),
  {
    ssr: false,
  }
)

export const ThemeContext = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberThemeContext,
    })),
  {
    ssr: false,
  }
)

export const Divider = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberDivider,
    })),
  {
    ssr: false,
  }
)

export const IconArrowRight = dynamic(
  () =>
    import("@gyldendal/kobber-icons/react").then((x) => ({
      default: x.IconArrowRight,
    })),
  {
    ssr: false,
  }
)
export const LogoutIcon = dynamic(
  () =>
    import("@gyldendal/kobber-icons/react").then((x) => ({
      default: x.IconLogout,
    })),
  {
    ssr: false,
  }
)

export const Accordion = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberAccordion,
    })),
  {
    ssr: false,
  }
)

export const List = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberList,
    })),
  {
    ssr: false,
  }
)

export const ListItem = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberListItem,
    })),
  {
    ssr: false,
  }
)

/** Required for showing web component icons */
export const IconLoader = () => {
  useEffect(() => {
    import("@gyldendal/kobber-icons/web-components")
  }, [])

  return null
}
