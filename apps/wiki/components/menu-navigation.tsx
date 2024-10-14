"use client";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TopMenuItem } from "./menu/top-menu-item";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PageDetails } from "@/types/types";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

type MenuNavigationProps = {
  pages: PageDetails[];
};

export function MenuNavigation({ pages }: MenuNavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // TODO: Find a smarter way to do this
  const isLandingPage = pathname === "/";

  // To close the sheet on every route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="h-40 flex items-center justify-between max-w-max-width w-full mx-auto">
      <Link
        href="/"
        className={cn(
          "text-primary-title-s font-medium text-text/color/primary/title-s",
          {
            "text-white": isLandingPage,
          },
        )}
      >
        {APP_NAME}
      </Link>
      <div>
        <ul
          className={cn(
            "text-text/color/action-item/button   items-center gap-24 hidden md:flex",
            {
              "text-white": isLandingPage,
            },
          )}
        >
          {pages.map((item) => (
            <TopMenuItem key={item.href} page={item} />
          ))}
        </ul>

        <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size={"icon"}
              className={cn(
                "flex md:hidden  bg-button/background/color/aubergine/main/primary/fallback",
                {
                  "hover:bg-button/background/color/carmine/main/primary/fallback bg-button/background/color/carmine/main/primary/fallback":
                    isOpen,
                },
              )}
            >
              {!isOpen ? (
                <Menu className="size-5" />
              ) : (
                <X className="size-5 text-white" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"top"}
            className="w-screen mt-[72px]   h-[calc(100vh-72px)] bg-aubergine-25 border-none "
          >
            <ul className=" text-text/color/action-item/button  flex flex-col gap-[56px] text-center ">
              {pages.map((item) => (
                <TopMenuItem page={item} className="text-[16px] text-center" />
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
