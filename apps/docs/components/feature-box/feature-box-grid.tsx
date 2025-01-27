import { FeatureBoxType } from "@/types/types"
import { FeatureBoxGridItem } from "./feature-box-grid-item"
import styles from "./feature-box.module.css"

type FeatureBoxGridProps = {
  items: FeatureBoxType[]
}

export function FeatureBoxGrid({ items }: FeatureBoxGridProps) {
  return (
    <div className={styles["feature-box"]}>
      {items.map((item) => (
        <FeatureBoxGridItem key={item.href} item={item} />
      ))}
    </div>
  )
}
