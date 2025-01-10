"use client"

import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"
import { Skeleton } from "./ui/skeleton"

/**
 * Lazy load kobber components on the client side, to prevent SSR errors.
 */

export const Accordion = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberAccordion,
    })),
  {
    loading: () => <Skeleton className="h-9 w-36" />,
    ssr: false,
  }
)

export const List = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberList,
    })),
  { loading: () => <Loader2 className="size-4" />, ssr: false }
)

export const ListItem = dynamic(
  () =>
    import("@gyldendal/kobber-components/react").then((x) => ({
      default: x.KobberListItem,
    })),
  { loading: () => <Skeleton className="h-9 w-36" />, ssr: false }
)
