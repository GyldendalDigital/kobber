import { FeatureBoxType } from "@/types/types"
import { damUrl } from "@/lib/damImageLoader"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { ExternalLinksGrid } from "@/components/global/external-links-grid"
import { HeroBanner } from "./hero-banner"

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col gap-y-content/gap/horizontal">
      <HeroBanner />
      <section className="grid gap-y-section/gap/horizontal">
        <h4 className="text-primary-heading-s font-normal text-[#481125ff]">Kom i gang</h4>
        <FeatureBoxGrid items={boxes} />
      </section>

      <section className="grid gap-y-section/gap/horizontal">
        <h3 className="text-primary-title-m text-[#481120]">Nyttige ressurser</h3>
        <ExternalLinksGrid />
      </section>
    </main>
  )
}

const boxes: FeatureBoxType[] = [
  {
    title: "Introduksjon av Kobber",
    href: "/kom-i-gang",
    image: damUrl("2bULAP2gabp9rC4A1CbQSB", ".jpg"),
  },
  {
    title: "Vår nye Gyldendal-logo",
    image: damUrl("CtM-1DQEapL98pVi_5S64C", ".svg"),
    href: "/merkevare/logo",
  },
  {
    title: "Vår nye fargepalett",
    image: damUrl("BkRpubsF45_8o0iVkKSQod", ".svg"),
    href: "/merkevare/farger",
  },
  {
    title: "Fonter",
    image: damUrl("Frg1nstAKYsA0hKXNk3z5x", ".svg"),
    href: "/merkevare/typografi",
  },
]
