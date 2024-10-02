import { ContentLayout, ContentShell } from "@/components/content-layout";
import { SideMenu } from "@/components/menu/side-menu";
import routes from "./merkevare.route";
import { SideMenuGroup } from "@/components/menu/side-menu-group";
import { WikiRoute } from "@/config/routes";

type GetStartedLayoutProps = {
  children: React.ReactNode;
};

export default function MerkevareLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenu>
          <SideMenuGroup title="Introduksjon" items={introRoutes} />
          <SideMenuGroup title="Verktøykassa" items={routes.merkevare.children} isOpenInitially />
          <SideMenuGroup title="Introduksjon" items={routes.merkevare.children} isOpenInitially />
        </SideMenu>
      </ContentShell>
      <section className="w-full md:w-[857px] pb-96">{children}</section>
    </ContentLayout>
  );
}

const introRoutes = {
  intro: {
    title: "Logo",
    children: {
      verdier: {
        title: "Våre verdier",
        status: "kommer",
      },
      merkevarehierarki: {
        title: "Merkevarehierarki",
        status: "kommer",
      },
      designprinsipper: {
        title: "Designprinsipper",
        status: "kommer",
      },
    },
  },
} satisfies WikiRoute;
