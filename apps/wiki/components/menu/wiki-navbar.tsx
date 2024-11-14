import { pageGettingStarted } from "@/app/(routes)/kom-i-gang/page"
import { pageComponents } from "@/app/(routes)/komponenter/page"
import { pageBrand } from "@/app/(routes)/merkevare/page"
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
