"use client"

import dynamic from "next/dynamic"
import { ChevronDown, ChevronUp } from "@gyldendal/kobber-icons/web-components"

/**
 * Gave up trying to use web components on the server, after many failed attempts.
 *
 * This file will wrap all kobber components in dynamic and load them client side.
 */

export const KobberCardLayout = dynamic(
  () => import("@gyldendal/kobber-components/react").then((x) => x.KobberCardLayout),
  { ssr: false }
)

export const KobberCardLayoutColumnAspectRatio = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => x.KobberCardLayoutColumnAspectRatio),
  { ssr: false }
)

export const KobberButton = dynamic(
  () => import("@gyldendal/kobber-components/react").then((x) => x.KobberButton),
  {
    ssr: false,
  }
)

export const KobberThemeContext = dynamic(
  () => import("@gyldendal/kobber-components/react").then((x) => x.KobberThemeContext),
  {
    ssr: false,
  }
)

export const KobberDivider = dynamic(
  () => import("@gyldendal/kobber-components/react").then((x) => x.KobberDivider),
  {
    ssr: false,
  }
)

export const KobberIconArrowRight = dynamic(
  () => import("@gyldendal/kobber-icons/react").then((x) => x.IconArrowRight),
  {
    ssr: false,
  }
)

export const KobberAccordion = dynamic(
  () => import("@gyldendal/kobber-components/react").then((x) => x.KobberAccordion),
  {
    ssr: false,
  }
)

export const KobberList = dynamic(
  () => import("@gyldendal/kobber-components/react").then((x) => x.KobberList),
  {
    ssr: false,
  }
)

export const KobberListItem = dynamic(
  () => import("@gyldendal/kobber-components/react").then((x) => x.KobberListItem),
  {
    ssr: false,
  }
)

/** Why isn't this happening automatically in kobber-icons? */
var ChevronDownName = "icon-chevron_down"
if (!customElements.get(ChevronDownName)) {
  customElements.define(ChevronDownName, ChevronDown)
}
var ChevronUpName = "icon-chevron_up"
if (!customElements.get(ChevronUpName)) {
  customElements.define(ChevronUpName, ChevronUp)
}
