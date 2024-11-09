"use client"

import { Sidebar } from "lucide-react"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

type SideMenuProps = {
  children: React.ReactNode
}

export const SideMenu = ({ children }: SideMenuProps) => {
  const isMobile = useIsMobile()

  // top-[96px] is the height of the navbar + gap
  return (
    <aside className="sticky top-[96px] flex flex-col gap-y-[8px] border-r border-[#E5CFD3] pb-1.5 pr-2">
      {isMobile ? (
        <Sheet modal={false}>
          <SheetTrigger asChild>
            <Button size="icon">
              <Sidebar className="size-[16px]" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="pt-[72px]">
            {children}
          </SheetContent>
        </Sheet>
      ) : (
        <>{children}</>
      )}
    </aside>
  )
}
