import Image from "next/image"
import { Display, Lead, TextWrapper } from "@gyldendal/kobber-components/react"
import { damUrl } from "@/lib/damImageLoader"
import styles from "./_hero-banner.module.css"

export function HeroBanner() {
  const src = damUrl("FO4HFrU94yn8e_pN7iIqOf", ".svg")
  const alt = "Gyldendal Art"
  return (
    <header className={styles.wrapper}>
      <Image
        src={src}
        width={188}
        height={184}
        alt={alt}
        className={styles["banner-image-small"]}
      />

      <TextWrapper>
        <Display>
          Velkommen til Kobber
          <div slot="extended">Gyldendals designsystem</div>
        </Display>
        <Lead>Design, bygg, og skap gode løsninger med Gyldendals designsystem.</Lead>
      </TextWrapper>

      <Image
        src={src}
        width={351}
        height={343}
        alt={alt}
        className={styles["banner-image-large"]}
      />
    </header>
  )
}
