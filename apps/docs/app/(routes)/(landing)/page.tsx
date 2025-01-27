import { KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import { FeatureBoxType } from "@/types/types"
import { cn } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import { ExternalLinksGrid } from "@/components/global/external-links-grid"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { metaGettingStarted } from "../kom-i-gang/gettingStarted.meta"
import { metaBrandColor } from "../merkevare/farger/brandColor.meta"
import { metaBrandLogoGyldendal } from "../merkevare/logo/gyldendal-logo/gyldendalLogo.meta"
import { metaBrandTypography } from "../merkevare/typografi/brandTypography.meta"
import { HeroBanner } from "./hero-banner"
import { metaLanding } from "./landing.meta"
import styles from "./landing.module.css"

export const metadata = metaLanding

export default function Home() {
  return (
    <main className={cn(styles.landing, pageLayoutStyles["page-spacing"])}>
      <HeroBanner />
      <section className="grid gap-y-section/gap/horizontal">
        <KobberHeading level="h2" variant="title medium">
          Kom i gang
        </KobberHeading>
        <FeatureBoxGrid items={boxes} />
      </section>

      <section className="grid gap-y-section/gap/horizontal">
        <KobberHeading level="h2" variant="title medium">
          Nyttige ressurser
        </KobberHeading>
        <ExternalLinksGrid />
      </section>
    </main>
  )
}

const boxes: FeatureBoxType[] = [
  {
    title: "Introduksjon av Kobber",
    href: metaGettingStarted.href,
    image: metaGettingStarted.image,
  },
  {
    title: "Vår nye Gyldendal-logo",
    image: metaBrandLogoGyldendal.image,
    href: metaBrandLogoGyldendal.href,
  },
  {
    title: "Vår nye fargepalett",
    image: metaBrandColor.image,
    href: metaBrandColor.href,
  },
  {
    title: "Fonter",
    image: metaBrandTypography.image,
    href: metaBrandTypography.href,
  },
]
