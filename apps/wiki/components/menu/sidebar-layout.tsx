import { PageMetadata } from "@/lib/metadata.utils"
import { Divider, List } from "@/components/kobber-components"
import { SideMenu } from "./side-menu"
import { SideMenuGroup, SideMenuGroupProps } from "./side-menu-group"
import { SideMenuItem } from "./side-menu-item"

type SidebarLayoutProps = {
  children: React.ReactNode
  groups?: Array<SideMenuGroupProps>
  items?: PageMetadata[]
}

export function SidebarLayout({ children, groups, items }: SidebarLayoutProps) {
  return (
    <>
      <SideMenu>
        {groups &&
          groups.map((group, index) => (
            <SideMenuGroup
              key={index}
              title={group.title}
              items={group.items}
              isOpenInitially={group.isOpenInitially}
            />
          ))}
        {items && (
          <List orientation="vertical">
            {items.map((item, i) => (
              <>
                <SideMenuItem key={item.href + i} {...item} />
                {i !== items.length - 1 && <Divider />}
              </>
            ))}
          </List>
        )}
      </SideMenu>
      <section className="w-[calc(100%-280px)] md:ml-[280px]">{children}</section>
    </>
  )
}
