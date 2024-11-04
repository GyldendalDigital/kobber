import { PageDetails } from "@/types/types"
import { ContentLayout, ContentShell } from "@/components/content-layout"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuGroup } from "@/components/menu/side-menu-group"
import { SessionProvider } from "@/components/providers/session-provider"
import { metadata as fargerPage } from "./farger/page"
import { metadata as merkevareIkonerPage } from "./ikoner/page"
import { metadata as merkevareLayoutPage } from "./layout/page"
import { metadata as merkevareLogoPage } from "./logo/page"
import { metadata as typografiPage } from "./typografi/page"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

export default async function MerkevareLayout({ children }: GetStartedLayoutProps) {
  return (
    <SessionProvider>
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
        <section className="w-full md:w-[857px]">{children}</section>
      </ContentLayout>
    </SessionProvider>
  )
}

const temporaryIntroRoutes: PageDetails[] = [
  { href: "/merkevare/merkevarehierarki", title: "Merkevarehierarki", image: null },
  { href: "#", title: "Våre verdier", status: "kommer", image: null },
  { href: "#", title: "Designprinsipper", status: "kommer", image: null },
]

const temporaryTemplateRoutes: PageDetails[] = [
  { href: "#", title: "Powerpoint", status: "kommer", image: null },
  { href: "#", title: "Word", status: "kommer", image: null },
  { href: "#", title: "E-post signatur", status: "kommer", image: null },
]
