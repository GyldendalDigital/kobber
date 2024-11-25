import { PageMetadata } from "@/lib/metadata.utils"
import { ContentLayout } from "@/components/content-layout"
import { SidebarLayout } from "@/components/menu/sidebar-layout"
import { metaBrandColor } from "./farger/brandColor.meta"
import { metaBrandIcons } from "./ikoner/brandIcons.meta"
import { metaBrandLogo } from "./logo/logo.meta"
import { metaEMailTemplate } from "./maler/e-post/e-post-template.meta"
import { metaPowerpointTemplate } from "./maler/powerpoint/powerpoint-template.meta"
import { metaWordTemplate } from "./maler/word/word-template.meta"
import { metaBrandTypography } from "./typografi/brandTypography.meta"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

export default async function MerkevareLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <SidebarLayout
        groups={[
          {
            title: "Introduksjon",
            items: temporaryIntroRoutes,
            isOpenInitially: true,
          },
          {
            title: "Identitetselementer",
            items: [metaBrandLogo, metaBrandColor, metaBrandTypography, metaBrandIcons],
            isOpenInitially: true,
          },
          {
            title: "Maler",
            items: [metaPowerpointTemplate, metaWordTemplate, metaEMailTemplate],
            isOpenInitially: true,
          },
        ]}
      >
        {children}
      </SidebarLayout>
    </ContentLayout>
  )
}

const temporaryIntroRoutes: PageMetadata[] = [
  { href: "/merkevare/merkevarehierarki", title: "Merkevarehierarki", image: null },
  { href: "#", title: "Våre verdier", status: "kommer", image: null },
  { href: "#", title: "Vår stemme", status: "kommer", image: null },
  { href: "#", title: "Designprinsipper", status: "kommer", image: null },
]
