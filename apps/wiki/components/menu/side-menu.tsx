"use client"

import { cn } from "@/lib/utils"

/** Only visible for md and larger devices */
export const SideMenu = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <aside
      className={cn(
        "hidden h-fit min-h-fit flex-1 flex-col gap-y-[8px] border-r border-[#E5CFD3] pb-1.5 pr-2 md:flex",
        className
      )}
    >
      {children}
    </aside>
  )
}
