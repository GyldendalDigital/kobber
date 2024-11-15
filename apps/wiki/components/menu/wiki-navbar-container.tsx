"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, Menu, X } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { APP_NAME } from "@/lib/constants"
import { PageMetadata } from "@/lib/metadata.utils"
import { cn } from "@/lib/utils"
import { ssoSignIn } from "@/hooks/use-sso-sign-in"
import { Button } from "@/components/kobber-components"
import { IconLogin, IconLogout } from "@/components/kobber-icons"
import { SubHeading } from "../sub-heading"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { WikiHeaderItem } from "./wiki-header-item"

type WikiNavbarContainerProps = {
  itemsDesktop: PageMetadata[]
  itemsMobile: PageMetadata[]
}

export function WikiNavbarContainer({ itemsDesktop, itemsMobile }: WikiNavbarContainerProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: session } = useSession()

  const flattenItems = (items: PageMetadata[]): PageMetadata[] => {
    return items.flatMap((item) => [item, ...(item.children ? flattenItems(item.children) : [])])
  }

  const flat = flattenItems(itemsMobile)

  const selectedCategoryItems = itemsMobile.find((item) => pathname.startsWith(item.href))?.children

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

  // const current = breadcrumb[breadcrumb.length - 1]

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
    <div className="mx-auto flex h-full w-full items-center justify-between">
      <Link href="/" className="text-primary-title-s font-medium text-[#481125]">
        {APP_NAME}
      </Link>
      <div>
        <ul className="hidden items-center gap-[24px] text-[#481125ff] md:flex">
          {itemsDesktop.map((item) => (
            <WikiHeaderItem key={item.href} page={item} />
          ))}

          <li className="ml-[56px] flex items-center gap-2">
            <Button onClick={handleAuth}>
              Logg {session?.user ? "ut" : "inn"}
              <span slot="icon">
                {session?.user ? (
                  <IconLogout className="size-4" />
                ) : (
                  <IconLogin className="size-4" />
                )}
              </span>
            </Button>
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
                {(selectedCategoryItems ?? itemsMobile).map((item) => (
                  <div className="flex flex-col gap-4" key={item.href}>
                    <SubHeading className={cn({ underline: pathname === item.href })}>
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
                    </SubHeading>

                    {item.children && item.children.length !== 0 && (
                      <ul className="flex flex-col gap-4">
                        {item.children.map((childItem) => {
                          return (
                            <WikiHeaderItem
                              key={childItem.href}
                              page={childItem}
                              className={cn("text-center text-[16px]", {})}
                            />
                          )
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>

              {/* More specific menu */}
              {/* {current.children && current.children.length !== 0 ? (
              <ul className="flex flex-col gap-4">
                {current.children.map((item) => (
                  <WikiHeaderItem
                    key={item.href}
                    page={item}
                    className={cn("text-center text-[16px]", {})}
                  />
                ))}
              </ul>
            ) : (
              itemsMobile.map((item) => (
                <div className="flex flex-col gap-4" key={item.href}>
                  <SubHeading>{item.title as string}</SubHeading>

                  {item.children && item.children.length !== 0 && (
                    <ul className="flex flex-col gap-4">
                      {item.children.map((childItem) => {
                        return (
                          <WikiHeaderItem
                            key={childItem.href}
                            page={childItem}
                            className={cn("text-center text-[16px]", {})}
                          />
                        )
                      })}
                    </ul>
                  )}
                </div>
              ))
            )} */}

              {/* DEBUG */}
              {/* <pre>{JSON.stringify(breadcrumb, null, 2)}</pre> */}
              {/* <pre>{JSON.stringify(current, null, 2)}</pre> */}
              {/* <pre>{JSON.stringify(parent, null, 2)}</pre> */}
              {/* <pre>
              {JSON.stringify(
                flat.map((x) => `${x.href}: ${x.title}`),
                null,
                2
              )}
            </pre> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
