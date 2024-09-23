"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { InteractiveScreen } from "@/components/interactive-screen";
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
import { KobberButton } from "@/components/kobber-ssr-loader";
import { semantics } from "@gyldendal/kobber-base/themes/default/tokens";
import type { ButtonLevel } from "@gyldendal/kobber-components/src/button/Button";

type BrandColor = Exclude<keyof typeof semantics.color.brand, "wine">;
const brandColors = Object.keys(semantics.color.brand) as Array<BrandColor>;
const uiColors = Object.keys(semantics.color.ui);
const themeColors = Object.keys(semantics.color.theme);

const colors = [...brandColors, ...uiColors, ...themeColors];

export function ButtonSection({ level }: { level: ButtonLevel }) {
  const [isLeftAligned, setIsLeftAligned] = useState<boolean>(false);
  const [color, setColor] = useState<BrandColor>(brandColors[0]);

  return (
    <InteractiveScreen
      key={level}
      properties={mode => <ButtonProperties setIsLeftAligned={setIsLeftAligned} setColor={setColor} />}
      footer={mode => (mode === "dark" && level === "secondary" ? "supplemental" : "")}
    >
      {mode => (
        <KobberButton
          color={color}
          variant={mode === "dark" && level === "secondary" ? "supplemental" : "main"}
          level={level}
        >
          Button
        </KobberButton>
      )}
    </InteractiveScreen>
  );
}

type ButtonPropertiesProps = {
  setIsLeftAligned: (value: boolean) => void;
  setColor: (value: BrandColor) => void;
};

function ButtonProperties({ setIsLeftAligned, setColor }: ButtonPropertiesProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="justify-start w-fit" variant={"dropdown"}>
            Høyrestilt ikon <ChevronDown className="size-5 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Ikon er ikke klart i komponenten</DropdownMenuLabel>
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
          {brandColors.map(brandColor => (
            <DropdownMenuItem key={brandColor} onClick={() => setColor(brandColor)}>
              {brandColor}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
