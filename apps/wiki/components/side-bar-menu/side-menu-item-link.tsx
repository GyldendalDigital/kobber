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
  const isOnPath = pathname && pathname == route.href;

  return (
    <li>
      <Link
        href={route.isComing ? "#" : route.href}
        className={cn("p-16 flex items-center gap-8  h-48  rounded-8 hover:bg-aubergine-50", {
          "underline underline-offset-8 decoration-wine-750": isOnPath,
        })}
      >
        <span className="text-text/color/action-item/button text-primary-body">{route.title}</span>

        {route.isComing && <span className="text-primary-label-s text-text/color/secondary/display-s">kommer</span>}
      </Link>

      {route.subRoutes && (
        <ul>
          {route.subRoutes.map((subRoute, index) => {
            const isSubRouteOnPath = pathname && pathname === subRoute.href;
            return (
              <li className="pl-40" key={index}>
                <Link
                  href={subRoute.isComing ? "#" : subRoute.href}
                  className={cn("p-16 flex items-center gap-8  h-48  rounded-8 hover:bg-aubergine-50", {
                    "underline underline-offset-8 decoration-wine-750": isSubRouteOnPath,
                  })}
                >
                  <span className="text-text/color/action-item/button text-primary-body">{subRoute.title}</span>

                  {subRoute.isComing && (
                    <span className="text-primary-label-m text-text/color/secondary/display-s">kommer</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
