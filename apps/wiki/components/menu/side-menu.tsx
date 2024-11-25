"use client"

import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"

/** Only visible for md and larger devices */
export const SideMenu = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className="fixed left-[max(0px,calc(50%-600px))] top-[72px] hidden h-[calc(100vh-72px)] w-[280px] overflow-hidden bg-[#FDF9F9] md:top-[67px] md:block md:h-[calc(100vh-67px-206px)]">
      <ScrollArea className="h-full">
        <div className={cn("flex flex-col gap-y-[8px] border-r border-[#E5CFD3] p-4", className)}>
          {children}
        </div>
      </ScrollArea>
    </div>
  )
}
