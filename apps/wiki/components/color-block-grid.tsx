import { ColorItemType } from "@/types/types"
import { cn } from "@/lib/utils"
import { ColorBlockGridItem } from "./color-block-grid-item"

type ColorBlockGridProps = {
  colors: ColorItemType[]
  enableCopy?: boolean
}

export function ColorBlockGrid({ colors, enableCopy = false }: ColorBlockGridProps) {
  return (
    <div
      className={cn("grid w-full grid-cols-4 items-start gap-24", {
        "flex flex-row": colors.length === 3,
      })}
    >
      {colors.map((color, index) => (
        <ColorBlockGridItem key={index} color={color} enableCopy={enableCopy} />
      ))}
    </div>
  )
}
