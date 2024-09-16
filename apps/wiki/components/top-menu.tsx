"use client";
import { mainRoutes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { isOnPath } from "@/utils/is-on-path";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function TopMenu() {
  const pathName = usePathname();

  return (
    <div className="w-full h-72 sticky bg-aubergine-25/80 backdrop-blur-sm top-0 z-50 py-16 px-24">
      <div className="h-[40px] flex items-center justify-between">
        <Link href="/" className="text-[20px] font-normal text-text/color/primary/title-s">
          Kobber
        </Link>

        <ul className=" text-text/color/action-item/button   items-center gap-24 hidden md:flex">
          {mainRoutes.map((route, index) => (
            <li key={index}>
              <Link
                className={cn(
                  "text-16 leading-[16px] hover:underline underline-offset-8 decoration-text/color/action-item/button",
                  {
                    underline: pathName && isOnPath(pathName, route.href),
                  },
                )}
                href={route.href}
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button size={"icon"} className="flex md:hidden bg-[#F9EAED]">
          <Menu className="size-5" />
        </Button>
      </div>
    </div>
  );
}
