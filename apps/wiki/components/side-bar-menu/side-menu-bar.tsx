import { SideMenuBarType } from "@/types/types";
import { SideMenuItem } from "./side-menu-item";
import { KobberDivider } from "../kobber-ssr-loader";
import { WikiRoute } from "@/config/routes";

type SideMenuBarProps = {
  items: WikiRoute[];
};

export function SideMenuBar({ items }: SideMenuBarProps) {
  return (
    <aside className="h-fit border-r-[1px] pb-1.5  border-wine-150 flex flex-col   gap-y-8">
      {items.map((group, index) => (
        <>
          <KobberDivider />
          <SideMenuItem key={index} routes={group.routes} name={group.groupTitle} />
        </>
      ))}
      <KobberDivider />
    </aside>
  );
}
