"use client";
import { cn } from "@/lib/utils";
import { isOnPath } from "@/utils/is-on-path";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageDetails } from "@/types/types";

type TopMenuItemProps = {
  className?: string;
  page: PageDetails;
};

export function TopMenuItem({
  className,
  page: { title, href },
}: TopMenuItemProps) {
  const pathName = usePathname();

  return (
    <li>
      <Link
        className={cn(
          "text-primary-body leading-16 hover:underline underline-offset-8 decoration-text/color/action-item/button",
          className,
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
