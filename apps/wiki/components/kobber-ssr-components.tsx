import dynamic from "next/dynamic"
import { Skeleton } from "./ui/skeleton"

export const Button = dynamic(
  () => import("@gyldendal/kobber-components/react").then((mod) => mod.KobberButton),
  {
    loading: () => <Skeleton className="h-6 w-24" />,
    ssr: false,
  }
)

export const Ingress = dynamic(
  () => import("@gyldendal/kobber-components/react").then((mod) => mod.KobberIngress),
  {
    ssr: false,
  }
)

export const List = dynamic(
  () => import("@gyldendal/kobber-components/react").then((mod) => mod.KobberList),
  {
    ssr: false,
  }
)
