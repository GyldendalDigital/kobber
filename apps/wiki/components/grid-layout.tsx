import { ReactNode } from "react";
import { TopMenu } from "./top-menu";

type GridLayoutProps = {
  children: ReactNode;
};

export function GridLayout({ children }: GridLayoutProps) {
  return (
    <div className="max-w-[1280px]  mx-auto">
      <TopMenu />
      {children}
    </div>
  );
}
