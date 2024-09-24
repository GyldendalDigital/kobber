import { ContentLayout, ContentShell } from "@/components/content-layout";
import { SideMenuBar } from "@/components/side-bar-menu/side-menu-bar";
import { VareMerkeRoutes } from "@/config/routes";

type GetStartedLayoutProps = {
  children: React.ReactNode;
};

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenuBar items={VareMerkeRoutes} />
      </ContentShell>
      <section className="w-full md:w-[857px] pb-20">{children}</section>
    </ContentLayout>
  );
}
