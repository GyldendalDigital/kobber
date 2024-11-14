"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { ColorItemType } from "@/types/types"
import { cn, hexToRgb } from "@/lib/utils"
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
    <div className="grid w-fit gap-[24px]">
      <div
        className={cn("size-[180px] rounded-[16px]", {
          "border border-[#E5CFD3]": color.hasBorder,
        })}
        style={{ backgroundColor: color.hex }}
      ></div>
      <div className="grid w-full gap-[16px]">
        <span className="text-[15px] font-normal text-[#481125ff]">{color.name}</span>
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between gap-[4px]">
            <span className="text-[11px] text-[#A35E70]">HEX {color.hex}</span>
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
          <div className="flex items-center justify-between gap-[4px]">
            <span className="text-[11px] text-[#A35E70]">
              RGB {color.rgb || hexToRgb(color.hex)}
            </span>
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
    </div>
  )
}
