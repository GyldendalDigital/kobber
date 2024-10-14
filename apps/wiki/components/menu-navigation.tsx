import { Menu } from "lucide-react";
import { pageDetailsMerkevare } from "@/app/merkevare/page";
import { Button } from "@/components/ui/button";
import { pageDetailsKomigang } from "@/app/kom-i-gang/page";
import { pageDetailsKomponenter } from "@/app/komponenter/page";
import { pageDetailsKontakt } from "@/app/kontakt/page";
import { TopMenuItem } from "./menu/top-menu-item";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function MenuNavigation() {
  return (
    <>
      <ul className=" text-text/color/action-item/button   items-center gap-24 hidden md:flex">
        {[
          pageDetailsKomigang,
          pageDetailsMerkevare,
          pageDetailsKomponenter,
          pageDetailsKontakt,
        ].map((item) => (
          <TopMenuItem key={item.href} {...item} />
        ))}
      </ul>

      <Sheet modal={false}>
        <SheetTrigger asChild>
          <Button size={"icon"} className="flex md:hidden bg-aubergine-25">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"} className="">
          <ul className=" text-text/color/action-item/button  flex flex-col gap-2   ">
            {[
              pageDetailsKomigang,
              pageDetailsMerkevare,
              pageDetailsKomponenter,
              pageDetailsKontakt,
            ].map((item) => (
              <SheetTrigger key={item.href} asChild>
                <TopMenuItem {...item} />
              </SheetTrigger>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}
