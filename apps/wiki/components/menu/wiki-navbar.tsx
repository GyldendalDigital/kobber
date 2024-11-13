import { metadata as komigangPage } from "@/app/(routes)/kom-i-gang/page"
import { metadata as komponenterPage } from "@/app/(routes)/komponenter/page"
import { metadata as merkevarePage } from "@/app/(routes)/merkevare/page"
import { WikiNavbarContainer } from "./wiki-navbar-container"

export function WikiNavbar() {
  return (
    <div className="z-50 flex h-[72px] w-full items-center backdrop-blur-sm md:h-[67px]">
      <WikiNavbarContainer
        itemsDesktop={[komigangPage, merkevarePage, komponenterPage]}
        itemsMobile={[komigangPage, merkevarePage, komponenterPage]}
      />
    </div>
  )
}
