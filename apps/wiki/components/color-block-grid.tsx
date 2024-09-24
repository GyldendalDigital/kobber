import { ColorItemType } from "@/types/types";
import { ColorBlockGridItem } from "./color-block-grid-item";

type ColorBlockGridProps = {
  colors: ColorItemType[];
};

export function ColorBlockGrid({ colors }: ColorBlockGridProps) {
  return (
    <div className="grid grid-cols-4 gap-24">
      {colors.map((color, index) => (
        <ColorBlockGridItem key={index} color={color} />
      ))}
    </div>
  );
}
