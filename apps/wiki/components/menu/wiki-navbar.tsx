import { pageBrand, pageComponents, pageGettingStarted } from "@/lib/metadata.pages"
import { WikiNavbarContainer } from "./wiki-navbar-container"

export function WikiNavbar() {
  return (
    <div className="z-50 flex h-[72px] w-full items-center backdrop-blur-sm md:h-[67px]">
      <WikiNavbarContainer
        itemsDesktop={[pageGettingStarted, pageBrand, pageComponents]}
        itemsMobile={[pageGettingStarted, pageBrand, pageComponents]}
      />
    </div>
  )
}
