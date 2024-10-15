"use client";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Button } from "../ui/button";
import { Sidebar } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type SideMenuProps = {
  children: React.ReactNode;
};

export const SideMenu = ({ children }: SideMenuProps) => {
  const isMobile = useIsMobile();

  return (
    <aside className="h-fit border-r pb-1.5 border-wine-150 flex flex-col gap-y-8 pr-10">
      {isMobile ? (
        <Sheet modal={false}>
          <SheetTrigger asChild>
            <Button size="icon">
              <Sidebar className="size-[16px]" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="pt-72">
            {children}
          </SheetContent>
        </Sheet>
      ) : (
        <>{children}</>
      )}
    </aside>
  );
};
