import Link from "next/link"
import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { IconExternalLink } from "@/components/kobber-icons"
import { SectionLayout } from "@/components/section-layout"
import { IconGrid } from "./icon-grid"
import { metaBrandIconSet } from "./iconSet.meta"

export const metadata = metaBrandIconSet

export default function IkonSett() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress className="max-w-[712px]">
          Våre ikoner kommer fra Streamline-biblioteket, og vi har et forhåndsdefinert sett med
          ikoner som brukes i Gyldendals digitale produkter. Streamline er en grafisk harmonisk
          ikonbank med flere unike kolleksjoner som kan kombineres etter behov. Vi benytter
          «Streamline Regular», et enkelt og konsistent formspråk som tydelig kommuniserer
          handlinger og informasjon til brukeren.
        </KobberIngress>
      </KobberTextWrapper>

      <Link
        target="_blank"
        href={"https://dam-p-gyldendal.pqcloud.eu/?w=ZqxPo6bFjq"}
        className="flex gap-[8px] text-[16px] leading-[1.15] text-link hover:underline"
      >
        Ikonsett
        <IconExternalLink />
      </Link>

      <IconGrid />
    </SectionLayout>
  )
}
