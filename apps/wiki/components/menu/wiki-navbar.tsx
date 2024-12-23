"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { KobberButton, KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import { ArrowLeft, Menu, X } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { APP_NAME } from "@/lib/constants"
import { PageMetadata } from "@/lib/metadata.utils"
import { cn } from "@/lib/utils"
import { ssoSignIn } from "@/hooks/use-sso-sign-in"
import { IconLogin, IconLogout } from "@/components/kobber-icons"
import { metaGettingStarted } from "@/app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaComponents } from "@/app/(routes)/komponenter/components.meta"
import { metaBrand } from "@/app/(routes)/merkevare/brand.meta"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { WikiHeaderItem } from "./wiki-header-item"

const equalRoutesForNow = [metaGettingStarted, metaBrand, metaComponents]

export function WikiNavbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: session, status } = useSession()

  const flattenItems = (items: PageMetadata[]): PageMetadata[] => {
    return items.flatMap((item) => [item, ...(item.children ? flattenItems(item.children) : [])])
  }

  const flat = flattenItems(equalRoutesForNow)

  const selectedCategoryItems = equalRoutesForNow.find((item) =>
    pathname.startsWith(item.href)
  )?.children

  const breadcrumb = pathname
    .split("/")
    .slice(1)
    .reduce((acc, segment, index, array) => {
      const href = `/${array.slice(0, index + 1).join("/")}`
      const item = flat.find((item) => item.href === href)
      if (item) {
        acc.push(item)
      }
      return acc
    }, [] as PageMetadata[])

  const parent = breadcrumb[breadcrumb.length - 2]

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
    <header className="fixed left-0 top-0 z-50 flex h-[72px] w-full items-center bg-[#FDF9F9] px-[1rem] md:h-[67px]">
      <div className="mx-auto flex h-full w-full items-center justify-between px-2 md:w-[1152px] md:px-0">
        <Link href="/" className="text-primary-title-s font-medium text-[#481125]">
          {APP_NAME}
        </Link>
        <div>
          <ul className="hidden items-center gap-[24px] text-[#481125ff] md:flex">
            {equalRoutesForNow.map((item) => (
              <WikiHeaderItem key={item.href} page={item} />
            ))}

            <li className="ml-[56px] flex items-center gap-2">
              <KobberButton
                color="aubergine"
                onClick={handleAuth}
                icon={
                  status === "unauthenticated" ? (
                    <IconLogin className="size-4" />
                  ) : (
                    <IconLogout className="size-4" />
                  )
                }
              >
                Logg {status === "unauthenticated" ? "inn" : "ut"}
              </KobberButton>
            </li>
          </ul>

          <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              {/* Switch with Button when we can prevent double click when not clicking the icon*/}
              <div
                className={cn("flex cursor-pointer rounded-[8px] bg-[#f9eaedff] p-4 md:hidden", {
                  "bg-[#dc134fff] hover:bg-[#dc134fff]": isOpen,
                })}
              >
                <span slot="icon">
                  {!isOpen ? <Menu size={20} /> : <X className="text-white" size={20} />}
                </span>
              </div>
            </SheetTrigger>
            <SheetContent
              side={"top"}
              className="z-60 mt-[72px] flex h-full w-screen overflow-y-auto border-none bg-[#FDF9F9] shadow-none outline-none"
            >
              <div className="flex flex-col gap-4">
                <p className="pt-1 text-[#A35E70]">
                  {pathname === "/" ? (
                    "Forside"
                  ) : (
                    <Link
                      href={pathname === parent?.redirectsTo ? "/" : (parent?.href ?? "/")}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft size={20} />
                      <span className="h-[20px]">
                        {breadcrumb.slice(0, -1).map((item, i) => (
                          <span key={item.href}>
                            {item.title as string}{" "}
                            {i !== breadcrumb.slice(0, -1).length - 1 ? "/ " : ""}
                          </span>
                        ))}
                      </span>
                    </Link>
                  )}
                </p>

                <ul className="flex flex-col gap-4">
                  {(selectedCategoryItems ?? equalRoutesForNow).map((item) => (
                    <li className="flex flex-col gap-4" key={item.href}>
                      <KobberHeading
                        level="h2"
                        variant="title medium"
                        className={cn({ underline: pathname === item.href })}
                      >
                        {!item.children || item.children.length === 0 ? (
                          <Link
                            className={cn("hover:underline", {
                              "cursor-not-allowed opacity-50 hover:no-underline":
                                item.status === "kommer",
                            })}
                            href={item.href}
                          >
                            {item.title as string}
                            {item.status ? (
                              <small slot="icon" className="text-[#dc134fff]">
                                {" "}
                                {item.status}
                              </small>
                            ) : null}
                          </Link>
                        ) : (
                          (item.title as string)
                        )}
                      </KobberHeading>

                      {item.children && item.children.length !== 0 && (
                        <ul className="flex flex-col gap-4">
                          {item.children.map((childItem) => {
                            return (
                              <WikiHeaderItem
                                key={childItem.href}
                                page={childItem}
                                className={cn("text-[16px]", {})}
                              />
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
