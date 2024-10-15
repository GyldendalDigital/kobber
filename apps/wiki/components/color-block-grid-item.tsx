"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { ColorItemType } from "@/types/types"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type ColorBlockGridItemProps = {
  color: ColorItemType
  enableCopy?: boolean
}

export function ColorBlockGridItem({ color, enableCopy = false }: ColorBlockGridItemProps) {
  const [copiedHex, setCopiedHex] = useState<boolean>(false)
  const [copiedRgb, setCopiedRgb] = useState<boolean>(false)

  const copyToClipboard = (text: string, type: "hex" | "rgb") => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "hex") {
        setCopiedHex(true)
        setTimeout(() => setCopiedHex(false), 2000) // Reset after 2 seconds
      } else {
        setCopiedRgb(true)
        setTimeout(() => setCopiedRgb(false), 2000) // Reset after 2 seconds
      }
    })
  }

  return (
    <div className="grid w-fit gap-16 px-main">
      <div
        className={cn("size-[180px] rounded-16", {
          "border border-wine-150": color.hasBorder,
        })}
        style={{ backgroundColor: color.hex }}
      ></div>
      <div className="grid w-full gap-8">
        <span className="text-[15px] font-normal text-text/color/primary/title-s">
          {color.name}
        </span>
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] text-wine-525">HEX {color.hex}</span>
          {enableCopy && (
            <Button
              variant={"info"}
              className={cn("group h-fit p-0 text-[11.5px] uppercase", {
                "opacity-70": copiedHex,
              })}
              onClick={() => copyToClipboard(color.hex, "hex")}
            >
              Kopier{copiedHex && "t"}
              {copiedHex ? (
                <Check className="ml-2 size-4 text-green-400" />
              ) : (
                <Copy className="ml-2 size-4 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </Button>
          )}
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] text-wine-525">RGB {color.rgb}</span>
          {enableCopy && (
            <Button
              variant={"info"}
              className={cn("group h-fit p-0 text-[11.5px] uppercase", {
                "opacity-70": copiedRgb,
              })}
              onClick={() => copyToClipboard(color.hex, "rgb")}
            >
              Kopier{copiedRgb && "t"}
              {copiedRgb ? (
                <Check className="ml-2 size-4 text-green-400" />
              ) : (
                <Copy className="ml-2 size-4 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
