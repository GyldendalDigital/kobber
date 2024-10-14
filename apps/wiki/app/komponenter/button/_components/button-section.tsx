"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { InteractiveScreen } from "@/components/interactive-screen";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  KobberButton,
  KobberIconArrowRight,
} from "@/components/kobber-ssr-loader";
import { semantics } from "@gyldendal/kobber-base/themes/default/tokens";
import type {
  ButtonLevel,
  ButtonIconSettings,
} from "@gyldendal/kobber-components/src/button/Button.types";

type BrandColor = Exclude<keyof typeof semantics.color.brand, "wine">;
const brandColors = Object.keys(semantics.color.brand) as Array<BrandColor>;

export function ButtonSection({ level }: { level: ButtonLevel }) {
  const [iconOptions, setIconOptions] = useState<ButtonIconSettings>("right");
  const [color, setColor] = useState<BrandColor>(brandColors[0]);

  return (
    <InteractiveScreen
      key={level}
      properties={(mode) => (
        <ButtonProperties setIconOptions={setIconOptions} setColor={setColor} />
      )}
      footer={(mode) =>
        mode === "dark" && level === "secondary" ? "supplemental" : ""
      }
    >
      {(mode) => (
        <KobberButton
          color={color}
          variant={
            mode === "dark" && level === "secondary" ? "supplemental" : "main"
          }
          iconSettings={iconOptions === "left" ? "left" : "right"}
          level={level}
        >
          Button
          {iconOptions !== "none" && <KobberIconArrowRight slot="icon" />}
        </KobberButton>
      )}
    </InteractiveScreen>
  );
}

type ButtonPropertiesProps = {
  setIconOptions: (value: ButtonIconSettings) => void;
  setColor: (value: BrandColor) => void;
};

function ButtonProperties({ setIconOptions, setColor }: ButtonPropertiesProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="justify-start w-fit" variant={"dropdown"}>
            Ikon <ChevronDown className="size-5 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setIconOptions("none")}>
              Ingen
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIconOptions("left")}>
              Venstre
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIconOptions("right")}>
              Høyre
            </DropdownMenuItem>
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
          {brandColors.map((brandColor) => (
            <DropdownMenuItem
              key={brandColor}
              onClick={() => setColor(brandColor)}
            >
              {brandColor}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
