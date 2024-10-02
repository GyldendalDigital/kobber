"use client";
import { routes } from "@/config/routes";
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
      <div className="h-40 flex items-center justify-between">
        <Link href="/" className="text-primary-title-s font-normal text-text/color/primary/title-s">
          Kobber
        </Link>

        <ul className=" text-text/color/action-item/button   items-center gap-24 hidden md:flex">
          {Object.entries(routes).map(([slug, { title }]) => (
            <li key={slug}>
              <Link
                className={cn(
                  "text-primary-body leading-16 hover:underline underline-offset-8 decoration-text/color/action-item/button",
                  {
                    underline: pathName && isOnPath(pathName, slug),
                  },
                )}
                href={"/" + slug}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Button size={"icon"} className="flex md:hidden bg-aubergine-25">
          <Menu className="size-5" />
        </Button>
      </div>
    </div>
  );
}
