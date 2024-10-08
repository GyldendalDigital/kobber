"use client";
import { cn } from "@/lib/utils";
import { isOnPath } from "@/utils/is-on-path";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageDetails } from "@/types/types";

export function TopMenuItem({ href, title }: PageDetails) {
  const pathName = usePathname();

  return (
    <li>
      <Link
        className={cn(
          "text-primary-body leading-16 hover:underline underline-offset-8 decoration-text/color/action-item/button",
          {
            underline: pathName && isOnPath(pathName, href),
          },
        )}
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
