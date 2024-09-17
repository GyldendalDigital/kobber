"use client";
import { ChevronDown, ChevronUp, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { SideMenuItemLink } from "./side-menu-item-link";
import { RouteType } from "@/types/types";

type SideMenuItemProps = {
  routes: RouteType[];
  name: string;
};

export function SideMenuItem({ routes, name }: SideMenuItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Collapsible className="grid gap-[8px] w-full " open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button className="justify-between mt-2 mr-2 ">
          <span className="uppercase text-text/color/action-item/button">{name}</span>
          {isOpen ? <ChevronUp className="size-6" /> : <ChevronDown className="size-6" />}
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="mr-2">
        <ul>
          {routes.map((route, index) => (
            <SideMenuItemLink key={index} route={route} />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
