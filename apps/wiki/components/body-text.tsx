import { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

export const BodyText = ({ children }: PropsWithChildren) => {
  return <p className={cn("whitespace-pre-wrap text-primary-body")}>{children}</p>
}
