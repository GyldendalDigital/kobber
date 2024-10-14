import { Menu } from "lucide-react";
import { pageDetailsMerkevare } from "@/app/merkevare/page";
import { Button } from "@/components/ui/button";
import { pageDetailsKomigang } from "@/app/kom-i-gang/page";
import { pageDetailsKomponenter } from "@/app/komponenter/page";
import { pageDetailsKontakt } from "@/app/kontakt/page";
import { TopMenuItem } from "./menu/top-menu-item";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

export function MenuNavigation() {
  return (
    <>
      <ul className=" text-text/color/action-item/button   items-center gap-24 hidden md:flex">
        {[pageDetailsKomigang, pageDetailsMerkevare, pageDetailsKomponenter, pageDetailsKontakt].map(item => (
          <TopMenuItem key={item.href} {...item} />
        ))}
      </ul>

      <Sheet modal={false}>
        <SheetTrigger asChild>
          <Button size={"icon"} className="flex md:hidden bg-aubergine-25">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"} className="p-0">
          <ul>
            <li>
              <SheetTrigger asChild>
                <Link href="#"></Link>
              </SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}
