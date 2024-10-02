"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  slug: string;
  title: string;
  status?: "kommer" | "nyhet";
};

export const SideMenuItemLink = ({ slug, title, status }: Props) => {
  const pathname = usePathname()?.split("/").pop();
  return (
    <Link
      href={status === "kommer" ? "#" : slug}
      className={cn("p-16 flex items-center gap-8  h-48  rounded-8 hover:bg-aubergine-50", {
        "underline underline-offset-8 decoration-wine-750": slug === pathname,
      })}
    >
      <span className="text-text/color/action-item/button text-primary-body">{title}</span>
      {status && <span className="text-primary-label-s text-text/color/secondary/display-s">{status}</span>}
    </Link>
  );
};
