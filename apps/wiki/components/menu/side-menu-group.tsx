"use client";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { KobberDivider } from "../kobber-ssr-loader";
import { SideMenuItem } from "./side-menu-item";
import { PageDetails } from "@/types/types";

type Props = {
  title: string;
  items: PageDetails[];
  isOpenInitially?: boolean;
};

export const SideMenuGroup = ({ title, items, isOpenInitially = false }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenInitially);
  return (
    <>
      <Collapsible className="grid gap-8 w-full " open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <CollapsibleTrigger asChild>
          <Button className="justify-between mt-2 mr-2 ">
            <span className="uppercase text-text/color/action-item/button">{title}</span>
            {isOpen ? <ChevronUp className="size-6" /> : <ChevronDown className="size-6" />}
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="mr-2">
          <ul>
            {items.map(item => (
              <SideMenuItem key={item.href} {...item} />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
      <KobberDivider />
    </>
  );
};
