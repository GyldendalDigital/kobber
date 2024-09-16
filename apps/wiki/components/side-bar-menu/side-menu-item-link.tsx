import { RouteType } from "@/types/types";
import Link from "next/link";

type SideMenuItemLinkProps = {
  route: RouteType;
};

export function SideMenuItemLink({ route }: SideMenuItemLinkProps) {
  return (
    <li>
      <Link
        href={route.isComing ? "#" : route.href}
        className="p-[16px] flex items-center gap-[8px]  h-[48px]  rounded-md hover:bg-red-100/80"
      >
        <span className="text-text/color/action-item/button text-sm">{route.title}</span>

        {route.isComing && <span className="text-[12px] text-text/color/secondary/display-s">kommer</span>}
      </Link>

      {route.subRoutes && (
        <ul>
          {route.subRoutes.map((route, index) => (
            <li className="pl-[40px]" key={index}>
              <Link
                href={route.isComing ? "#" : route.href}
                className="p-[16px] flex items-center gap-[8px]  h-[48px]  rounded-md hover:bg-aubergine-50"
              >
                <span className="text-text/color/action-item/button text-sm">{route.title}</span>

                {route.isComing && <span className="text-[12px] text-text/color/secondary/display-s">kommer</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
