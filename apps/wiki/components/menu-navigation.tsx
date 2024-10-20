"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { PageDetails } from "@/types/types"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TopMenuItem } from "./menu/top-menu-item"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

type MenuNavigationProps = {
  pages: PageDetails[]
}

export function MenuNavigation({ pages }: MenuNavigationProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // To close the sheet on every route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <div className="mx-auto flex h-40 w-full max-w-max-width items-center justify-between">
      <Link href="/" className="text-primary-title-s font-medium text-text/color/primary/title-s">
        {APP_NAME}
      </Link>
      <div>
        <ul className="hidden items-center gap-24 text-text/color/action-item/button md:flex">
          {pages.map((item) => (
            <TopMenuItem key={item.href} page={item} />
          ))}
        </ul>

        <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size={"icon"}
              className={cn(
                "flex bg-button/background/color/aubergine/main/primary/fallback md:hidden",
                {
                  "bg-button/background/color/carmine/main/primary/fallback hover:bg-button/background/color/carmine/main/primary/fallback":
                    isOpen,
                }
              )}
            >
              {!isOpen ? <Menu className="size-5" /> : <X className="size-5 text-white" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"top"}
            className="mt-[72px] h-[calc(100vh-72px)] w-screen border-none bg-aubergine-25"
          >
            <ul className="flex flex-col gap-[56px] text-center text-text/color/action-item/button">
              {pages.map((item) => (
                <TopMenuItem page={item} className={cn("text-center text-[16px]", {})} />
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
