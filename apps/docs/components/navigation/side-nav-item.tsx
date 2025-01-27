import { KobberList } from "@gyldendal/kobber-components/react-ssr-safe"
import { PageMetadata } from "@/lib/metadata.utils"
import { SideNavItemLink } from "./side-nav-item-link"

export const SideNavItem = (item: PageMetadata) => {
  return (
    <>
      <SideNavItemLink {...item} />

      {item.children && item.children.length !== 0 && (
        <KobberList orientation="vertical" className="pl-[20px]">
          {item.children.map((item) => (
            <SideNavItem key={item.href} {...item} />
          ))}
        </KobberList>
      )}
    </>
  )
}
