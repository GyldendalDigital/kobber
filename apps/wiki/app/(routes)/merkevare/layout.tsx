import { SideMenuBar } from "@/components/side-bar-menu/side-menu-bar";
import { LogoSVG } from "@/components/svg";
import { VareMerkeRoutes } from "@/config/routes";

type GetStartedLayoutProps = {
  children: React.ReactNode;
};

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <div className="grid grid-cols-[270px_1fr] overflow-hidden gap-7">
      <div className="w-full md:w-[270px] rounded-[8px] space-y-96 ">
        <SideMenuBar items={VareMerkeRoutes} />
        <LogoSVG />
      </div>
      <section className="w-full md:w-[857px] pb-20">{children}</section>
    </div>
  );
}
