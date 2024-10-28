import { ContentLayout, ContentShell } from "@/components/content-layout"
import { List } from "@/components/kobber-ssr-loader"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuItem } from "@/components/menu/side-menu-item"
import { GetStartedRoutesData } from "./routes-data"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenu>
          <List orientation="vertical" className="divide-y divide-[#E4CFD3]">
            {GetStartedRoutesData.map((item, i) => (
              <SideMenuItem key={item.href + i} {...item} />
            ))}
          </List>
        </SideMenu>
      </ContentShell>
      <div className="w-full">{children}</div>
    </ContentLayout>
  )
}
