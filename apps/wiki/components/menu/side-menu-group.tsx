"use client"

import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import { PageDetails } from "@/types/types"
import { KobberDivider } from "../kobber-ssr-loader"
import { Button } from "../ui/button"
import { SideMenuItem } from "./side-menu-item"

type Props = {
  title: string
  items: PageDetails[]
  isOpenInitially?: boolean
}

export const SideMenuGroup = ({ title, items, isOpenInitially = false }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenInitially)

  if (!items) return null
  return (
    <>
      <Collapsible
        className="grid w-full gap-8"
        open={isOpen}
        onOpenChange={() => setIsOpen(!isOpen)}
      >
        <CollapsibleTrigger asChild>
          <Button className="mr-2 mt-2 justify-between">
            <span className="uppercase text-text/color/action-item/button">{title}</span>
            {isOpen ? <ChevronUp className="size-6" /> : <ChevronDown className="size-6" />}
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="mr-2">
          <ul>
            {items.map((item) => (
              <SideMenuItem key={item.href} {...item} />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
      <KobberDivider />
    </>
  )
}
