"use client";
import { cn } from "@/lib/utils";
import { RouteType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideMenuItemLinkProps = {
  route: RouteType;
};

export function SideMenuItemLink({ route }: SideMenuItemLinkProps) {
  const pathname = usePathname();
  const isOnPath = pathname && pathname === route.href;

  return (
    <li>
      <Link
        href={route.isComing ? "#" : route.href}
        className={cn("p-[16px] flex items-center gap-[8px]  h-[48px]  rounded-md hover:bg-aubergine-50", {
          "underline underline-offset-8 decoration-text/color/action-item/button": isOnPath,
        })}
      >
        <span className="text-text/color/action-item/button text-sm">{route.title}</span>

        {route.isComing && <span className="text-[12px] text-text/color/secondary/display-s">kommer</span>}
      </Link>

      {route.subRoutes && (
        <ul>
          {route.subRoutes.map((subRoute, index) => {
            const isSubRouteOnPath = pathname && pathname === subRoute.href;
            return (
              <li className="pl-[40px]" key={index}>
                <Link
                  href={subRoute.isComing ? "#" : subRoute.href}
                  className={cn("p-[16px] flex items-center gap-[8px]  h-[48px]  rounded-md hover:bg-aubergine-50", {
                    "underline underline-offset-8 decoration-text/color/action-item/button": isSubRouteOnPath,
                  })}
                >
                  <span className="text-text/color/action-item/button text-sm">{subRoute.title}</span>

                  {subRoute.isComing && <span className="text-[12px] text-text/color/secondary/display-s">kommer</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
