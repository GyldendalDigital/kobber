import { metaGettingStarted } from "@/app/(routes)/kom-i-gang/gettingStarted.meta"
import { metaComponents } from "@/app/(routes)/komponenter/components.meta"
import { metaBrand } from "@/app/(routes)/merkevare/brand.meta"
import { WikiNavbarContainer } from "./wiki-navbar-container"

const equalRoutesForNow = [metaGettingStarted, metaBrand, metaComponents]

export function WikiNavbar() {
  return (
    <div className="z-50 flex h-[72px] w-full items-center backdrop-blur-sm md:h-[67px]">
      <WikiNavbarContainer itemsDesktop={equalRoutesForNow} itemsMobile={equalRoutesForNow} />
    </div>
  )
}
