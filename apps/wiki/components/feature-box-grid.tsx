import { FeatureBoxType } from "@/types/types";
import { FeatureBoxGridItem } from "./feature-box-grid-item";
import { KobberCardLayout, KobberCardLayoutColumnAspectRatio } from "./kobber-ssr-loader";

type FeatureBoxGridProps = {
  items: FeatureBoxType[];
};

export function FeatureBoxGrid({ items }: FeatureBoxGridProps) {
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
