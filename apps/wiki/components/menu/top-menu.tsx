import Link from "next/link";
import { Menu } from "lucide-react";
import { pageDetailsMerkevare } from "@/app/merkevare/page";
import { Button } from "../ui/button";
import { TopMenuItem } from "./top-menu-item";
import { pageDetailsKomigang } from "@/app/kom-i-gang/page";
import { pageDetailsKomponenter } from "@/app/komponenter/page";
import { pageDetailsKontakt } from "@/app/kontakt/page";
import { APP_NAME } from "@/lib/constants";

export function TopMenu() {
  return (
    <div className="px-main w-full h-72 sticky bg-aubergine-25/80 backdrop-blur-sm top-0 z-50 py-16">
      <div className="h-40 flex items-center justify-between">
        <Link href="/" className="text-primary-title-s font-normal text-text/color/primary/title-s">
          {APP_NAME}
        </Link>

        <ul className=" text-text/color/action-item/button   items-center gap-24 hidden md:flex">
          {[pageDetailsKomigang, pageDetailsMerkevare, pageDetailsKomponenter, pageDetailsKontakt].map(item => (
            <TopMenuItem key={item.href} {...item} />
          ))}
        </ul>
        <Button size={"icon"} className="flex md:hidden bg-aubergine-25">
          <Menu className="size-5" />
        </Button>
      </div>
    </div>
  );
}
