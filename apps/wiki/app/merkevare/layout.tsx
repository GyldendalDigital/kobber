import { ContentLayout, ContentShell } from "@/components/content-layout";
import { SideMenu } from "@/components/menu/side-menu";
import { SideMenuGroup } from "@/components/menu/side-menu-group";
import { pageDetailsFarge } from "./farger/page";
import { PageDetails } from "@/types/types";
import { pageDetailsLogo } from "./logo/page";
import { pageDetailsLayout } from "./layout/page";
import { pageDetailsIkoner } from "./ikoner/page";
import { pageDetailsTypografi } from "./typografi/page";

type GetStartedLayoutProps = {
  children: React.ReactNode;
};

export default function MerkevareLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenu>
          <SideMenuGroup title="Introduksjon" items={temporaryIntroRoutes} isOpenInitially />
          <SideMenuGroup
            title="Verktøykassa"
            items={[pageDetailsLogo, pageDetailsFarge, pageDetailsTypografi, pageDetailsIkoner, pageDetailsLayout]}
            isOpenInitially
          />
          <SideMenuGroup title="Maler" items={temporaryTemplateRoutes} isOpenInitially />
        </SideMenu>
      </ContentShell>
      <section className="w-full md:w-[857px] pb-96">{children}</section>
    </ContentLayout>
  );
}

const temporaryIntroRoutes: PageDetails[] = [
  { href: "#", title: "Våre verdier", status: "kommer" },
  { href: "#", title: "Merkevarehierarki", status: "kommer" },
  { href: "#", title: "Designprinsipper", status: "kommer" },
];

const temporaryTemplateRoutes: PageDetails[] = [
  { href: "#", title: "Powerpoint", status: "kommer" },
  { href: "#", title: "Word", status: "kommer" },
  { href: "#", title: "E-post signatur", status: "kommer" },
  { href: "#", title: "Visittkort", status: "kommer" },
  { href: "#", title: "Nyhetsbrev", status: "kommer" },
];
