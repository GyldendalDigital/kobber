"use client"

import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"
import { FeatureBoxGridSkeleton } from "./feature-box-grid-skeleton"
import { Skeleton } from "./ui/skeleton"

/**
 * Lazy load kobber components on the client side, to prevent SSR errors.
 */

export const Body = dynamic(
  () => import("@gyldendal/kobber-components/react-ssr-safe").then((mod) => mod.KobberBody),
  {
    loading: () => <Skeleton className="h-6 w-24" />,
    ssr: false,
  }
)

export const Grid = dynamic(
  () => import("@gyldendal/kobber-components/react-ssr-safe").then((mod) => mod.KobberGrid),
  {
    loading: () => <Skeleton className="h-6 w-24" />,
    ssr: false,
  }
)
export const BoxLayout = dynamic(
  () => import("@gyldendal/kobber-components/react-ssr-safe").then((mod) => mod.KobberBoxLayout),
  {
    loading: () => <Skeleton className="h-6 w-24" />,
    ssr: false,
  }
)

export const ArticleWrapper = dynamic(
  () =>
    import("@gyldendal/kobber-components/react-ssr-safe").then((mod) => mod.KobberArticleWrapper),
  {
    loading: () => <Skeleton className="h-6 w-24" />,
    ssr: false,
  }
)

export const Button = dynamic(
  () => import("@gyldendal/kobber-components/react-ssr-safe").then((mod) => mod.KobberButton),
  {
    loading: () => <Skeleton className="h-6 w-24" />,
    ssr: false,
  }
)

export const Ingress = dynamic(
  () => import("@gyldendal/kobber-components/react-ssr-safe").then((mod) => mod.KobberIngress),
  {
    ssr: false,
  }
)

export const CardLayout = dynamic(
  () =>
    import("@gyldendal/kobber-components/react-ssr-safe").then((x) => ({
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

export const CardLayoutColumnAspectRatio = dynamic(
  () =>
    import("@gyldendal/kobber-components/react-ssr-safe").then((x) => ({
      default: x.KobberCardLayoutColumnAspectRatio,
    })),
  {
    loading: () => <Loader2 className="size-4" />,
    ssr: false,
  }
)

export const Divider = dynamic(
  () =>
    import("@gyldendal/kobber-components/react-ssr-safe").then((x) => ({
      default: x.KobberDivider,
    })),
  { loading: () => <Loader2 className="size-4" />, ssr: false }
)

export const Accordion = dynamic(
  () =>
    import("@gyldendal/kobber-components/react-ssr-safe").then((x) => ({
      default: x.KobberAccordion,
    })),
  {
    loading: () => <Skeleton className="h-9 w-36" />,
    ssr: false,
  }
)

export const List = dynamic(
  () =>
    import("@gyldendal/kobber-components/react-ssr-safe").then((x) => ({
      default: x.KobberList,
    })),
  { loading: () => <Loader2 className="size-4" />, ssr: false }
)

export const ListItem = dynamic(
  () =>
    import("@gyldendal/kobber-components/react-ssr-safe").then((x) => ({
      default: x.KobberListItem,
    })),
  { loading: () => <Skeleton className="h-9 w-36" />, ssr: false }
)
