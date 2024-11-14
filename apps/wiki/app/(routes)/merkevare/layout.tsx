import { PageMetadata } from "@/lib/metadata.utils"
import { ContentLayout } from "@/components/content-layout"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuGroup } from "@/components/menu/side-menu-group"
import { metaBrandColor } from "./farger/brandColor.meta"
import { metaBrandIcons } from "./ikoner/brandIcons.meta"
import { metaBrandLogo } from "./logo/logo.meta"
import { metaBrandTypography } from "./typografi/brandTypography.meta"

type GetStartedLayoutProps = {
  children: React.ReactNode
}

export default async function MerkevareLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <SideMenu>
        <SideMenuGroup title="Introduksjon" items={temporaryIntroRoutes} isOpenInitially />
        <SideMenuGroup
          title="Identitetselementer"
          items={[
            metaBrandLogo,
            metaBrandColor,
            metaBrandTypography,
            metaBrandIcons,
            // merkevareLayoutPage, // removed until further notice
            // see https://gyldendal.slack.com/archives/C07HL681DV3/p1731334837774659
          ]}
          isOpenInitially
        />
        <SideMenuGroup title="Maler" items={temporaryTemplateRoutes} isOpenInitially />
      </SideMenu>
      <section className="w-full">{children}</section>
    </ContentLayout>
  )
}

const temporaryIntroRoutes: PageMetadata[] = [
  { href: "/merkevare/merkevarehierarki", title: "Merkevarehierarki", image: null },
  { href: "#", title: "Våre verdier", status: "kommer", image: null },
  { href: "#", title: "Vår stemme", status: "kommer", image: null },
  { href: "#", title: "Designprinsipper", status: "kommer", image: null },
]

const temporaryTemplateRoutes: PageMetadata[] = [
  { href: "#", title: "Powerpoint", status: "kommer", image: null },
  { href: "#", title: "Word", status: "kommer", image: null },
  { href: "#", title: "E-post signatur", status: "kommer", image: null },
]
