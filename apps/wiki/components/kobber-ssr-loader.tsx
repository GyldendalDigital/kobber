// "use client"

// import dynamic from "next/dynamic"
// import { Loader2 } from "lucide-react"
// import { Skeleton } from "./ui/skeleton"
// import { FeatureBoxGridSkeleton } from "./feature-box-grid-skeleton"

// /**
//  * Gave up trying to use web components on the server, after many failed attempts.
//  *
//  * This file will wrap all kobber components in dynamic and load them client side.
//  */

// export const CardLayout = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberCardLayout,
//     })),
//   {
//     loading: () => (
//       <div className="flex items-center justify-between gap-4">
//         <FeatureBoxGridSkeleton />
//         <FeatureBoxGridSkeleton />
//         <FeatureBoxGridSkeleton />
//         <FeatureBoxGridSkeleton />
//       </div>
//     ),
//     ssr: false,
//   }
// )

// export const CardLayoutToColumnAspectRatio = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberCardLayoutColumnAspectRatio,
//     })),
//   {
//     loading: () => <Loader2 className="size-4 animate-spin" />,
//     ssr: false,
//   }
// )

// export const CardLayoutColumnAspectRatio = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberCardLayoutColumnAspectRatio,
//     })),
//   {
//     loading: () => <Loader2 className="size-4 animate-spin" />,
//     ssr: false,
//   }
// )

// export const Button = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberButton,
//     })),
//   {
//     loading: () => <Loader2 className="size-4 animate-spin" />,
//     ssr: false,
//   }
// )

// export const ThemeContext = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberThemeContext,
//     })),
//   {
//     loading: () => (
//       <div className="flex h-screen w-full items-center justify-center">
//         Loading theme... <Loader2 className="ml-2 size-4 animate-spin" />
//       </div>
//     ),
//     ssr: false,
//   }
// )

// export const Divider = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberDivider,
//     })),
//   { loading: () => <Loader2 className="size-4 animate-spin" />, ssr: false }
// )

// export const IconArrowRight = dynamic(
//   () =>
//     import("@gyldendal/kobber-icons/react").then((x) => ({
//       default: x.IconArrowRight,
//     })),
//   { loading: () => <Loader2 className="size-4 animate-spin" />, ssr: false }
// )
// export const LogoutIcon = dynamic(
//   () =>
//     import("@gyldendal/kobber-icons/react").then((x) => ({
//       default: x.IconLogout,
//     })),
//   { loading: () => <Loader2 className="size-4 animate-spin" />, ssr: false }
// )
// export const LoginIcon = dynamic(
//   () =>
//     import("@gyldendal/kobber-icons/react").then((x) => ({
//       default: x.IconLogin,
//     })),
//   { loading: () => <Loader2 className="size-4 animate-spin" />, ssr: false }
// )

// export const Accordion = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberAccordion,
//     })),
//   {
//     loading: () => <Skeleton className="h-9 w-36" />,

//     ssr: false,
//   }
// )

// export const List = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberList,
//     })),
//   { loading: () => <Loader2 className="size-4 animate-spin" />, ssr: false }
// )

// export const ListItem = dynamic(
//   () =>
//     import("@gyldendal/kobber-components/react").then((x) => ({
//       default: x.KobberListItem,
//     })),
//   { loading: () => <Skeleton className="h-9 w-36" />, ssr: false }
// )
