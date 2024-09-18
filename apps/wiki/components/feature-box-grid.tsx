import { FeatureBoxType } from "@/types/types";
import { FeatureBoxGridItem } from "./feature-box-grid-item";
import { cn } from "@/lib/utils";
import { KobberCardLayout, KobberCardLayoutColumnAspectRatio, KobberGrid } from "@gyldendal/kobber-components/react";

type FeatureBoxGridProps = {
  items: FeatureBoxType[];
  className?: string;
};

export function FeatureBoxGrid({ items, className }: FeatureBoxGridProps) {
  return (
    <KobberCardLayout gap="5px" aspect-ratio-height="0.9">
      {items.map((item, index) => (
        <KobberCardLayoutColumnAspectRatio key={index}>
          <FeatureBoxGridItem item={item} />
        </KobberCardLayoutColumnAspectRatio>
      ))}
    </KobberCardLayout>
  );
}
