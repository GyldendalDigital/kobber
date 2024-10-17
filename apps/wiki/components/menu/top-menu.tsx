import { cn } from "@/lib/utils"
import { metadata as komigangPage } from "@/app/kom-i-gang/page"
import { metadata as komponenterPage } from "@/app/komponenter/page"
import { metadata as kontaktPage } from "@/app/kontakt/page"
import { metadata as merkevarePage } from "@/app/merkevare/page"
import { MenuNavigation } from "../menu-navigation"

const pageDetailsArray = [komigangPage, merkevarePage, komponenterPage, kontaktPage]

export function TopMenu() {
  return (
    <div
      className={cn(
        "sticky top-0 z-50 flex h-72 w-full items-center bg-inherit px-main backdrop-blur-sm md:px-0"
      )}
    >
      <MenuNavigation pages={pageDetailsArray} />
    </div>
  )
}
