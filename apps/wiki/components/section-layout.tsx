import { ReactNode } from "react";

type SectionLayoutProps = {
  children: ReactNode;
};

export function SectionLayout({ children }: SectionLayoutProps) {
  return <div className="w-full md:w-[858px] grid gap-10">{children}</div>;
}
