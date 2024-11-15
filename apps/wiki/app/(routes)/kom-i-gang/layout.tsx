import { PageMetadata } from "@/lib/metadata.utils"
import { ContentLayout } from "@/components/content-layout"
import { Divider, List } from "@/components/kobber-components"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuItem } from "@/components/menu/side-menu-item"
import { metaGettingStartedHow } from "./hvordan-bruke-kobber/how.meta"
import { metaGettingStartedIntro } from "./introduksjon/intro.meta"
import { metaGettingStartedContact } from "./kontakt/contact.meta"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

const GetStartedRoutes: PageMetadata[] = [
  metaGettingStartedIntro,
  metaGettingStartedHow,
  metaGettingStartedContact,
]

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  // top-[96px] is the height of the navbar + gap
  return (
    <ContentLayout>
      <SideMenu className="sticky top-[96px] max-h-0">
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
