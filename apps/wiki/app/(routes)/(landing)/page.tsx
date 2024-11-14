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

const links = [
  {
    title: "Github",
    href: "https://github.com/GyldendalDigital/kobber",
  },
  {
    title: "Figma",
    href: "https://www.figma.com/design/Ok3TVIMuuMH33Ka3spj5H8/Dokumentasjon",
  },
  {
    title: "DAM",
    href: "https://dam-p-gyldendal.pqcloud.eu/app/#/search///?path=%22%5CKobber%5CDokumentasjon%22&enableAssetsOfCollections=false&showAssetsOfSubfolders=true&showSubCollections=false",
  },
  {
    title: "Teams",
    href: "https://teams.microsoft.com/l/team/19%3Aa8271fb02da6401cac6283ad1e4a3e81%40thread.tacv2/conversations?groupId=bff6d131-5a81-403d-b18d-30408987f80e&tenantId=eabfa100-f9b3-4265-bed7-2a818cf990fe",
  },
]
