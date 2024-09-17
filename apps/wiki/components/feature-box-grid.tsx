import { FeatureBoxType } from "@/types/types";
import { FeatureBoxGridItem } from "./feature-box-grid-item";

type FeatureBoxGridProps = {
  items: FeatureBoxType[];
};

export function FeatureBoxGrid({ items }: FeatureBoxGridProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      {items.map((item, index) => (
        <FeatureBoxGridItem key={index} item={item} />
      ))}
    </div>
  );
}
