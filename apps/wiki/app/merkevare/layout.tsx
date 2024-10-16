import { PageDetails } from "@/types/types"
import { ContentLayout, ContentShell } from "@/components/content-layout"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuGroup } from "@/components/menu/side-menu-group"
import { metadata as fargerPage } from "./farger/page"
import { metadata as merkevareIkonerPage } from "./ikoner/page"
import { metadata as merkevareLayoutPage } from "./layout/page"
import { metadata as merkevareLogoPage } from "./logo/page"
import { metadata as typografiPage } from "./typografi/page"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

export default function MerkevareLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenu>
          <SideMenuGroup title="Introduksjon" items={temporaryIntroRoutes} isOpenInitially />
          <SideMenuGroup
            title="Verktøykassa"
            items={[
              merkevareLogoPage,
              fargerPage,
              typografiPage,
              merkevareIkonerPage,
              merkevareLayoutPage,
            ]}
            isOpenInitially
          />
          <SideMenuGroup title="Maler" items={temporaryTemplateRoutes} isOpenInitially />
        </SideMenu>
      </ContentShell>
      <section className="w-full pb-96 md:w-[857px]">{children}</section>
    </ContentLayout>
  )
}

const temporaryIntroRoutes: PageDetails[] = [
  { href: "/merkevare/merkevarehierarki", title: "Merkevarehierarki" },
  { href: "#", title: "Våre verdier", status: "kommer" },
  { href: "#", title: "Designprinsipper", status: "kommer" },
]

const temporaryTemplateRoutes: PageDetails[] = [
  { href: "#", title: "Powerpoint", status: "kommer" },
  { href: "#", title: "Word", status: "kommer" },
  { href: "#", title: "E-post signatur", status: "kommer" },
  { href: "#", title: "Visittkort", status: "kommer" },
  { href: "#", title: "Nyhetsbrev", status: "kommer" },
]
