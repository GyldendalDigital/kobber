import Image from "next/image"
import { KobberHeading, KobberTextWrapper } from "@gyldendal/kobber-components/react"
import { damUrl } from "@/lib/damImageLoader"
import styles from "./_hero-banner.module.css"

export function HeroBanner() {
  const src = damUrl("FO4HFrU94yn8e_pN7iIqOf", ".svg")
  const alt = "Gyldendal Art"
  return (
    <header className={styles["wrapper"]}>
      <Image
        src={src}
        width={188}
        height={184}
        alt={alt}
        className={styles["banner-image-small"]}
      />

      <KobberTextWrapper>
        <KobberHeading>
          Velkommen til Kobber
          <KobberHeading level="div" variant="secondary">
            <em>Gyldendals designsystem</em>
          </KobberHeading>
        </KobberHeading>
        <p>Design, bygg, og skap gode løsninger med Gyldendals designsystem.</p>
      </KobberTextWrapper>

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
