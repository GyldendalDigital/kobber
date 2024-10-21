import { ContentLayout, ContentShell } from "@/components/content-layout"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuGroup } from "@/components/menu/side-menu-group"
import { GetStartedRoutesData } from "./routes-data"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenu>
          <SideMenuGroup title="Introduksjon" items={GetStartedRoutesData} isOpenInitially />
        </SideMenu>
      </ContentShell>
      <div className="w-full">{children}</div>
    </ContentLayout>
  )
}
