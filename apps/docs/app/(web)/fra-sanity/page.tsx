import { KobberHeading } from "@gyldendal/kobber-components/react-ssr-safe"
import { FeatureBoxType } from "@/types/types"
import { cn } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import { ExternalLinksGrid } from "@/components/global/external-links-grid"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { metaGettingStarted } from "@/app/(web)/(routes)/kom-i-gang/gettingStarted.meta"
import { metaBrandColor } from "@/app/(web)/(routes)/merkevare/farger/brandColor.meta"
import { metaBrandLogoGyldendal } from "@/app/(web)/(routes)/merkevare/logo/gyldendal-logo/gyldendalLogo.meta"
import { metaBrandTypography } from "@/app/(web)/(routes)/merkevare/typografi/brandTypography.meta"
import styles from "../(routes)/(landing)/landing.module.css"
import { HeroBanner } from "../(routes)/(landing)/hero-banner"
import { metaLanding } from "../(routes)/(landing)/landing.meta"

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
