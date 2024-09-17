import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColorItemType } from "@/types/types";
import { Copy } from "lucide-react";

type ColorBlockGridItem = {
  color: ColorItemType;
  enableCopy?: boolean;
};

export function ColorBlockGridItem({ color, enableCopy = false }: ColorBlockGridItem) {
  return (
    <div className="w-fit grid gap-[16px]">
      <div
        className={cn("rounded-[16px] size-[180px]", {
          "border border-wine-150": color.hasBorder,
        })}
        style={{ backgroundColor: color.hex }}
      ></div>
      <div className="grid gap-[8px] w-full">
        <span className="text-text/color/primary/body font-normal">{color.name}</span>
        <div className="flex items-center gap-4">
          <span className="text-text/color/primary/label-s">HEX {color.hex}</span>
          {enableCopy && (
            <Button variant={"info"} className="uppercase p-0 h-fit group">
              Kopier
              <Copy className="size-4 opacity-0 group-hover:opacity-100 ml-2 transition-opacity" />
            </Button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-text/color/primary/label-s">RGB {color.rgb}</span>
          {enableCopy && (
            <Button variant={"info"} className="uppercase p-0 h-fit group">
              Kopier
              <Copy className="size-4 opacity-0 group-hover:opacity-100 ml-2 transition-opacity" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
