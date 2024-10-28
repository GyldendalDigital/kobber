"use client"

import { Sidebar } from "lucide-react"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { ThemeContext } from "../kobber-components"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

type SideMenuProps = {
  children: React.ReactNode
}

export const SideMenu = ({ children }: SideMenuProps) => {
  const isMobile = useIsMobile()

  return (
    <aside className="flex h-fit flex-col gap-y-8 border-r border-[#E5CFD3] pb-1.5 pr-10">
      {isMobile ? (
        <Sheet modal={false}>
          <SheetTrigger asChild>
            <Button size="icon">
              <Sidebar className="size-[16px]" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="pt-72">
            <ThemeContext themeId="kobber-theme-default">{children}</ThemeContext>
          </SheetContent>
        </Sheet>
      ) : (
        <>{children}</>
      )}
    </aside>
  )
}
