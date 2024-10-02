"use client";

import { RouteDataType } from "@/types/types";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { isOnPath } from "@/utils/is-on-path";

type SideBarProps = {
  routes: RouteDataType[];
};
export function SideBar({ routes }: SideBarProps) {
  const pathName = usePathname();

  return (
    <ul className="space-y-8">
      {routes.map((route, index) => (
        <li key={index}>
          <Link
            href={route.slug}
            className={cn(buttonVariants({ variant: "menu", size: "sm", className: "w-full justify-start" }), {
              " underline": pathName && isOnPath(pathName, route.slug),
            })}
          >
            {route.hrefTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
}
