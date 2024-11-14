import { PageMetadata } from "@/lib/metadata.utils"
import { ContentLayout } from "@/components/content-layout"
import { Divider, List } from "@/components/kobber-components"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuItem } from "@/components/menu/side-menu-item"
import { pageGettingStartedHow } from "./hvordan-bruke-kobber/page"
import { pageGettingStartedIntro } from "./introduksjon/page"
import { pageGettingStartedContact } from "./kontakt/page"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

const GetStartedRoutes: PageMetadata[] = [
  pageGettingStartedIntro,
  pageGettingStartedHow,
  pageGettingStartedContact,
]

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <SideMenu>
        <List orientation="vertical">
          {GetStartedRoutes.map((item, i) => (
            <>
              <SideMenuItem key={item.href + i} {...item} />
              {i !== GetStartedRoutes.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </SideMenu>
      <div className="w-full">{children}</div>
    </ContentLayout>
  )
}
