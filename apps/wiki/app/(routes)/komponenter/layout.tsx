import { PageDetails } from "@/types/types"
import { ContentLayout } from "@/components/content-layout"
import { SideMenu } from "@/components/menu/side-menu"
import { SideMenuGroup } from "@/components/menu/side-menu-group"
import { metadata as komponenterButtonPage } from "./button/page"

type ComponentsLayoutProps = {
  children: React.ReactNode
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <ContentLayout>
      <SideMenu>
        <SideMenuGroup
          title="Navigasjon"
          items={[temporaryItem("Breadcrumb"), komponenterButtonPage, temporaryItem("Footer")]}
          isOpenInitially
        />
        <SideMenuGroup
          title="Skjema"
          items={["Checkbox", "Radiobutton", "Switch", "Text field"].map(temporaryItem)}
          isOpenInitially
        />
        <SideMenuGroup
          title="Feedback"
          items={["Alert", "Labels", "Loader", "Progressbar", "Tooltip"].map(temporaryItem)}
          isOpenInitially
        />
        <SideMenuGroup
          title="Layout"
          items={["Accordion", "Card", "Carousel", "List", "Modal", "Search"].map(temporaryItem)}
          isOpenInitially
        />
      </SideMenu>
      <section className="w-full pb-20">{children}</section>
    </ContentLayout>
  )
}

const temporaryItem = (title: string): PageDetails => ({
  href: "#",
  title,
  status: "kommer",
  image: null,
})
