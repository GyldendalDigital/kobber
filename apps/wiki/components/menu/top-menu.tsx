import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import { MenuNavigation } from "../menu-navigation";

import { pageDetailsKomigang } from "@/app/kom-i-gang/page";
import { pageDetailsKomponenter } from "@/app/komponenter/page";
import { pageDetailsKontakt } from "@/app/kontakt/page";
import { pageDetailsMerkevare } from "@/app/merkevare/page";

const pageDetailsArray = [
  pageDetailsKomigang,
  pageDetailsMerkevare,
  pageDetailsKomponenter,
  pageDetailsKontakt,
];

export function TopMenu() {
  return (
    <div className="px-main w-full h-72 sticky bg-aubergine-25 backdrop-blur-sm top-0 z-50 py-16">
      <div className="h-40 flex items-center justify-between">
        <Link
          href="/"
          className="text-primary-title-s font-normal text-text/color/primary/title-s"
        >
          {APP_NAME}
        </Link>
        <MenuNavigation pages={pageDetailsArray} />
      </div>
    </div>
  );
}
