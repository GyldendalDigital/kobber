import Link from "next/link"
import { FeatureBoxType } from "@/types/types"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { HeroBanner } from "@/components/hero-banner"
import { IconExternalLink } from "@/components/kobber-icons"

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col gap-y-content/gap/horizontal">
      <HeroBanner src={"./hero-svg.svg"} alt="Gyldendal Art" width={188} height={184} />
      <section className="grid gap-y-section/gap/horizontal">
        <h4 className="text-primary-heading-s font-normal text-[#481125ff]">Kom i gang</h4>
        <FeatureBoxGrid items={boxes} />
      </section>

      <section className="grid gap-y-section/gap/horizontal">
        <h3 className="text-primary-title-m text-[#481120]">Nyttige ressurser</h3>
        <ul className="flex flex-wrap items-center gap-[16px]">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-link flex items-center gap-[8px] text-[16px] hover:underline"
              >
                {item.title}
                <IconExternalLink style={{ "--icon-width": "12px" } as React.CSSProperties} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

const boxes: FeatureBoxType[] = [
  {
    title: "Introduksjon av Kobber",
    href: "/kom-i-gang",
    image:
      "https://dam-p-gyldendal.pqcloud.eu/authkey/1AwlfRxdpz/preview/2bULAP2gabp9rC4A1CbQSB/previews/maxWidth_1600_maxHeight_1600.jpg/*/_DX_2016_preview.jpg?_=1",
  },
  {
    title: "Vår nye Gyldendal-logo",
    image:
      "https://dam-p-gyldendal.pqcloud.eu/authkey/SQNi-PWIBu/preview/CtM-1DQEapL98pVi_5S64C/previews/maxWidth_1600_maxHeight_1600.jpg/*/Gyldendal%20logo_preview.jpg?_=1",
    href: "/merkevare/logo",
  },
  {
    title: "Vår nye fargepalett",
    image:
      "https://dam-p-gyldendal.pqcloud.eu/authkey/W73B6GH3DM/preview/BkRpubsF45_8o0iVkKSQod/previews/maxWidth_1600_maxHeight_1600.jpg/*/identitet_preview.jpg?_=1",
    href: "/merkevare/farger",
  },
  {
    title: "Fonter",
    image:
      "https://dam-p-gyldendal.pqcloud.eu/authkey/7hatoDCOhD/preview/Frg1nstAKYsA0hKXNk3z5x/previews/maxWidth_1600_maxHeight_1600.jpg/*/Retningslinjer_preview.jpg?_=1",
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
    href: "#",
  },
]
