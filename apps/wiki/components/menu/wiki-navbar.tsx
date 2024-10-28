import { metadata as komigangPage } from "@/app/kom-i-gang/page"
import { metadata as komponenterPage } from "@/app/komponenter/page"
import { metadata as kontaktPage } from "@/app/kontakt/page"
import { metadata as merkevarePage } from "@/app/merkevare/page"
import { WikiNavbarContainer } from "./wiki-navbar-container"

const pageDetailsArray = [komigangPage, merkevarePage, komponenterPage, kontaktPage]

export function WikiNavbar() {
  return (
    <div className="z-50 flex h-[72px] w-full items-center backdrop-blur-sm md:h-[67px]">
      <WikiNavbarContainer pages={pageDetailsArray} />
    </div>
  )
}
