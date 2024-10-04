import { PropsWithChildren } from "react";

export const SideMenu = ({ children }: PropsWithChildren) => {
  return (
    <aside className="h-fit border-r-[1px] pb-1.5 border-wine-150 flex flex-col gap-y-8 px-main">{children}</aside>
  );
};
