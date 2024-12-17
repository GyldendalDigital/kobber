"use client"

import { useState } from "react"
import { component, primitives } from "@gyldendal/kobber-base/themes/default/tokens"
import type { Button as KobberButton } from "@gyldendal/kobber-components/web-components"
import { ChevronDown } from "lucide-react"
import { Button as RadixButton } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { InteractiveScreen } from "@/components/interactive-screen"
import { Button } from "@/components/kobber-components"
import { IconArrowRight } from "@/components/kobber-icons"

type BrandColor = keyof typeof component.button.background.color
const brandColors = Object.keys(primitives.color) as Array<BrandColor>

type ButtonLevel = typeof KobberButton.prototype.level
type ButtonIconSettings = typeof KobberButton.prototype.iconSettings

export function ButtonSection({ level }: { level: ButtonLevel }) {
  const [iconOptions, setIconOptions] = useState<ButtonIconSettings>("right")
  const [color, setColor] = useState<BrandColor>(brandColors[0])

  return (
    <InteractiveScreen
      level={level}
      properties={(mode) => (
        <ButtonProperties setIconOptions={setIconOptions} setColor={setColor} />
      )}
      footer={(mode) => (mode === "dark" && level === "secondary" ? "supplemental" : "")}
    >
      {(mode) => (
        <Button
          color={color}
          variant={mode === "dark" && level === "secondary" ? "supplemental" : "main"}
          iconSettings={iconOptions === "left" ? "left" : "right"}
          level={level}
        >
          Button
          {iconOptions !== "none" && (
            <span slot="icon">
              <IconArrowRight />
            </span>
          )}
        </Button>
      )}
    </InteractiveScreen>
  )
}

type ButtonPropertiesProps = {
  setIconOptions: (value: ButtonIconSettings) => void
  setColor: (value: BrandColor) => void
}

function ButtonProperties({ setIconOptions, setColor }: ButtonPropertiesProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <RadixButton className="w-fit justify-start" variant={"dropdown"}>
            Ikon <ChevronDown className="ml-2 size-5" />
          </RadixButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setIconOptions("none")}>Ingen</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIconOptions("left")}>Venstre</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIconOptions("right")}>Høyre</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <RadixButton className="w-fit justify-start" variant={"dropdown"}>
            Brand color <ChevronDown className="ml-2 size-5" />
          </RadixButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {brandColors.map((brandColor) => (
            <DropdownMenuItem key={brandColor} onClick={() => setColor(brandColor)}>
              {brandColor}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
