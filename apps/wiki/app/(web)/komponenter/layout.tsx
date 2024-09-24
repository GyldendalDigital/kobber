import { ContentLayout, ContentShell } from "@/components/content-layout";
import { SideMenuBar } from "@/components/side-bar-menu/side-menu-bar";
import { ComponentsRoutes } from "@/config/routes";

type ComponentsLayoutProps = {
  children: React.ReactNode;
};

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenuBar items={ComponentsRoutes} />
      </ContentShell>
      <section className="w-full pb-20">{children}</section>
    </ContentLayout>
  );
}
