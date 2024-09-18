"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ContentSection } from "@/components/content-section";
import { InteractiveScreen } from "@/components/interactive-screen";
import { InteractiveScreenProperties } from "@/components/interactive-screen-properties";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ButtonSection() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLeftAligned, setIsLeftAligned] = useState<boolean>(false);

  return (
    <ContentSection
      heading="Primærknapp"
      ingress="Brukes som hovedhandling på en side. Knappen finnes i flere fargeutførelser avhengig av konteksten den brukes i. Identitetsfargen karminrød og lys aubergine er ofte brukt på både lys og mørk bakgrunn. "
    >
      <InteractiveScreen
        properties={
          <InteractiveScreenProperties
            setIsDarkMode={setIsDarkMode}
            properties={<ButtonProperties setIsLeftAligned={setIsLeftAligned} />}
          />
        }
      >
        <Button variant={isDarkMode ? "primaryDark" : "primary"}>
          {isLeftAligned && <ArrowRight className="size-5 mr-2" />}
          Button
          {!isLeftAligned && <ArrowRight className="size-5 ml-2" />}
        </Button>
      </InteractiveScreen>
    </ContentSection>
  );
}

type ButtonPropertiesProps = {
  setIsLeftAligned: (value: boolean) => void;
};

function ButtonProperties({ setIsLeftAligned }: ButtonPropertiesProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="justify-start w-fit" variant={"dropdown"}>
            Høyrestilt ikon <ChevronDown className="size-5 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Ikon innstillinger</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setIsLeftAligned(true)}>Venstre</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsLeftAligned(false)}>Høyre</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="justify-start w-fit" variant={"dropdown"}>
            Brand color <ChevronDown className="size-5 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Ikon innstillinger</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Venstre</DropdownMenuItem>
            <DropdownMenuItem>Høyre</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
