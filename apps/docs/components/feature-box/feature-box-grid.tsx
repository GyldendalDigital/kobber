import { FeatureBoxGridItem } from "./feature-box-grid-item"
import styles from "./feature-box.module.css"

export type FeatureBoxType = {
  title?: string | null
  image?: string | null
  href?: string | null
  disabled?: boolean
}

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
