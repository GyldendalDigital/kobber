import { PageMetadata } from "@/lib/metadata.utils"
import { ContentLayout } from "@/components/content-layout"
import { SidebarLayout } from "@/components/menu/sidebar-layout"
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
      <SidebarLayout items={GetStartedRoutes}>{children}</SidebarLayout>
    </ContentLayout>
  )
}
