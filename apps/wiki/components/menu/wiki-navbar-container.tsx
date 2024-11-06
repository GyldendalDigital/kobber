"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { PageDetails } from "@/types/types"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { ssoSignIn } from "@/hooks/use-sso-sign-in"
import { Button } from "@/components/kobber-components"
import { IconLogin, IconLogout } from "@/components/kobber-icons"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { WikiHeaderItem } from "./wiki-header-item"

type WikiNavbarContainerProps = {
  pages: PageDetails[]
}

export function WikiNavbarContainer({ pages }: WikiNavbarContainerProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: session } = useSession()

  const handleLogout = () => {
    signOut()
  }

  const handleAuth = () => {
    if (session?.user) {
      handleLogout()
    } else {
      ssoSignIn({ redirectUrl: pathname })
    }
  }

  // To close the sheet on every route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <div className="mx-auto flex h-full w-full items-center justify-between">
      <Link href="/" className="text-primary-title-s font-medium text-[#481125]">
        {APP_NAME}
      </Link>
      <div>
        <ul className="hidden items-center gap-[24px] text-[#481125ff] md:flex">
          {pages.map((item) => (
            <WikiHeaderItem key={item.href} page={item} />
          ))}

          <li className="ml-[56px] flex items-center gap-2">
            <Button color="aubergine" onClick={handleAuth} variant="supplemental alt">
              Logg {session?.user ? "ut" : "inn"}
              {session?.user ? (
                <IconLogout className="size-4" slot="icon" />
              ) : (
                <IconLogin className="size-4" slot="icon" />
              )}
            </Button>
          </li>
        </ul>

        <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              className={cn("flex size-[40px] rounded-[8px] bg-[#f9eaedff] p-0 md:hidden", {
                "bg-[#dc134fff] hover:bg-[#dc134fff]": isOpen,
              })}
            >
              {!isOpen ? (
                <Menu className="size-[15px]" />
              ) : (
                <X className="size-[15px] text-white" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"top"}
            className="mt-[72px] h-[calc(100vh-72px)] w-screen border-none bg-[#FDF9F9]"
          >
            <ul className="flex flex-col gap-[56px] text-center text-[#481125ff]">
              {pages.map((item) => (
                <WikiHeaderItem
                  key={item.href}
                  page={item}
                  className={cn("text-center text-[16px]", {})}
                />
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
