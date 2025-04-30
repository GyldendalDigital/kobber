import Image from "next/image"
import Link from "next/link"
import { FeatureBoxType } from "./feature-box-grid"
import styles from "./feature-box.module.css"

type FeatureBoxGridItemProps = {
  item: FeatureBoxType
}

export function FeatureBoxGridItem({
  item: { disabled, href, image, title },
}: FeatureBoxGridItemProps) {
  const url = href ? href : "#"

  return (
    <Link href={disabled ? "#" : url} className={styles["feature-box-item"]}>
      {title && <label className={styles["feature-box-item-label"]}>{title as string}</label>}

      {image ? (
        <Image src={image} fill alt="" className={styles["feature-box-item-image"]} />
      ) : null}
    </Link>
  )
}
