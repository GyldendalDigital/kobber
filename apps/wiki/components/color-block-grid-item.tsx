"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColorItemType } from "@/types/types";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

type ColorBlockGridItem = {
  color: ColorItemType;
  enableCopy?: boolean;
};

export function ColorBlockGridItem({ color, enableCopy = false }: ColorBlockGridItem) {
  const [copiedHex, setCopiedHex] = useState<boolean>(false);
  const [copiedRgb, setCopiedRgb] = useState<boolean>(false);

  const copyToClipboard = (text: string, type: "hex" | "rgb") => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "hex") {
        setCopiedHex(true);
        setTimeout(() => setCopiedHex(false), 2000); // Reset after 2 seconds
      } else {
        setCopiedRgb(true);
        setTimeout(() => setCopiedRgb(false), 2000); // Reset after 2 seconds
      }
    });
  };

  return (
    <div className="w-fit  px-main grid gap-16">
      <div
        className={cn("rounded-16 size-[180px]", {
          "border border-wine-150": color.hasBorder,
        })}
        style={{ backgroundColor: color.hex }}
      ></div>
      <div className="grid gap-8 w-full">
        <span className="text-text/color/primary/body font-normal">{color.name}</span>
        <div className="flex items-center gap-4">
          <span className="text-text/color/primary/label-s">HEX {color.hex}</span>
          {enableCopy && (
            <Button
              variant={"info"}
              className={cn("uppercase p-0 h-fit group", {
                "opacity-70": copiedHex,
              })}
              onClick={() => copyToClipboard(color.hex, "hex")}
            >
              Kopier{copiedHex && "t"}
              {copiedHex ? (
                <Check className="size-4 text-green-400 ml-2" />
              ) : (
                <Copy className="size-4 opacity-0 group-hover:opacity-100 ml-2 transition-opacity" />
              )}
            </Button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-text/color/primary/label-s">RGB {color.rgb}</span>
          {enableCopy && (
            <Button
              variant={"info"}
              className={cn("uppercase p-0 h-fit group", {
                "opacity-70": copiedRgb,
              })}
              onClick={() => copyToClipboard(color.hex, "rgb")}
            >
              Kopier{copiedRgb && "t"}
              {copiedRgb ? (
                <Check className="size-4 text-green-400 ml-2" />
              ) : (
                <Copy className="size-4 opacity-0 group-hover:opacity-100 ml-2 transition-opacity" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
