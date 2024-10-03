"use client";
import { cn } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideMenuItemLink = ({ href, title, status }: PageDetails) => {
  const pathname = usePathname();
  console.log(pathname, href, pathname === href)
  return (
    <Link
      href={status === "kommer" ? "#" : href}
      className={cn("p-16 flex items-center gap-8  h-48  rounded-8 hover:bg-aubergine-50", {
        "underline underline-offset-8 decoration-wine-750": href === pathname,
      })}
    >
      <span className="text-text/color/action-item/button text-primary-body">{title}</span>
      {status && <span className="text-primary-label-s text-text/color/secondary/display-s">{status}</span>}
    </Link>
  );
};
