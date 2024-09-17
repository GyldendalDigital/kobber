import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLayout({ children, className }: SectionLayoutProps) {
  return <div className={cn("w-full md:w-[858px] grid gap-10", className)}>{children}</div>;
}
