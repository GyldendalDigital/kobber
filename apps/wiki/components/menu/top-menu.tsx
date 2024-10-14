import { MenuNavigation } from "../menu-navigation";

import { pageDetailsKomigang } from "@/app/kom-i-gang/page";
import { pageDetailsKomponenter } from "@/app/komponenter/page";
import { pageDetailsKontakt } from "@/app/kontakt/page";
import { pageDetailsMerkevare } from "@/app/merkevare/page";
import { cn } from "@/lib/utils";

const pageDetailsArray = [
  pageDetailsKomigang,
  pageDetailsMerkevare,
  pageDetailsKomponenter,
  pageDetailsKontakt,
];

export function TopMenu() {
  return (
    <div
      className={cn(
        "w-full h-72 sticky bg-inherit backdrop-blur-sm top-0 z-50 flex items-center ",
      )}
    >
      <MenuNavigation pages={pageDetailsArray} />
    </div>
  );
}
