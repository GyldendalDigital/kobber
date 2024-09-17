import { SideMenuBarType } from "@/types/types";
import { SideMenuItem } from "./side-menu-item";

type SideMenuBarProps = {
  items: SideMenuBarType[];
};

export function SideMenuBar({ items }: SideMenuBarProps) {
  return (
    <aside className="h-fit border-r-[1px] pb-1.5 border-b-[1px] border-wine-150 flex flex-col divide-y divide-wine-150 gap-y-[8px]">
      {items.map((group, index) => (
        <SideMenuItem key={index} routes={group.routes} name={group.groupTitle} />
      ))}
    </aside>
  );
}
