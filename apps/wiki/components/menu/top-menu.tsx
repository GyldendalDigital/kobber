import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { pageDetailsMerkevare } from "@/app/(web)/merkevare/page";
import { Button } from "../ui/button";
import { TopMenuItem } from "./top-menu-item";
import { pageDetailsKomigang } from "@/app/(web)/kom-i-gang/page";

export function TopMenu() {
  return (
    <div className="w-full h-72 sticky bg-aubergine-25/80 backdrop-blur-sm top-0 z-50 py-16 px-24">
      <div className="h-40 flex items-center justify-between">
        <Link href="/" className="text-primary-title-s font-normal text-text/color/primary/title-s">
          Kobber
        </Link>

        <ul className=" text-text/color/action-item/button   items-center gap-24 hidden md:flex">
          {[pageDetailsKomigang, pageDetailsMerkevare].map(item => (
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
