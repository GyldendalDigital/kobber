import { ContentLayout } from "@/components/content-layout"
import { SidebarLayout } from "@/components/menu/sidebar-layout"
import { metaBrandNavigationGroups } from "./brand.meta"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

export default async function MerkevareLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <SidebarLayout groups={metaBrandNavigationGroups}>{children}</SidebarLayout>
    </ContentLayout>
  )
}
