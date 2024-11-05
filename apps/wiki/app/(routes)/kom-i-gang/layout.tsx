import { PageDetails } from "@/types/types"
import { ContentLayout, ContentShell } from "@/components/content-layout"
import { List } from "@/components/kobber-components"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuItem } from "@/components/menu/side-menu-item"
import { metadata as howToUsePage } from "@/app/(routes)/kom-i-gang/hvordan-bruke-kobber/page"
import { metadata as introductionPage } from "@/app/(routes)/kom-i-gang/introduksjon/page"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

const GetStartedRoutes: PageDetails[] = [introductionPage, howToUsePage]

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenu>
          <List orientation="vertical" className="divide-y divide-[#E4CFD3]">
            {GetStartedRoutes.map((item, i) => (
              <SideMenuItem key={item.href + i} {...item} />
            ))}
          </List>
        </SideMenu>
      </ContentShell>
      <div className="w-full">{children}</div>
    </ContentLayout>
  )
}
