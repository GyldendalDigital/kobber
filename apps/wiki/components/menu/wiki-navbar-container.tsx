"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { KobberButton } from "@gyldendal/kobber-components/react"
import { Menu, X } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { PageDetails } from "@/types/types"
import { APP_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LogoutIcon } from "../kobber-ssr-loader"
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

          {session && (
            <li className="flex items-center gap-2">
              <KobberButton
                color="aubergine"
                className="m-0 flex w-fit items-center p-0"
                onClick={handleLogout}
                variant="main"
              >
                Logg ut
                <LogoutIcon className="size-4" slot="icon" />
              </KobberButton>
              <Image
                src={session.user.image}
                width={30}
                height={30}
                alt="logo"
                className="pointer-events-none rounded-full"
              />
            </li>
          )}
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
