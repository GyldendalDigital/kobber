import { FeatureBoxType } from "@/types/types";
import { FeatureBoxGridItem } from "./feature-box-grid-item";
import { cn } from "@/lib/utils";

type FeatureBoxGridProps = {
  items: FeatureBoxType[];
  className?: string;
};

export function FeatureBoxGrid({ items, className }: FeatureBoxGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-5", className)}>
      {items.map((item, index) => (
        <FeatureBoxGridItem key={index} item={item} />
      ))}
    </div>
  );
}
