import Link from "next/link"
import { damUrl } from "@/lib/damImageLoader"
import { pageMetadata } from "@/lib/metadata.utils"
import { ArticleWrapper, BoxLayout, Ingress } from "@/components/kobber-components"
import { IconExternalLink } from "@/components/kobber-icons"
import { IconGrid } from "./icon-grid"

export const metadata = pageMetadata(import.meta.url, {
  title: "Ikonsett",
  image: damUrl("5eWSL54644-8vUcyASwDWy", ".svg"),
  description:
    "Ikonsett er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
})

export default function IkonSett() {
  return (
    <ArticleWrapper>
      <BoxLayout className="py-0">
        <h1 className="text-[48px] font-light leading-[57.6px] text-[#481125]">
          {metadata.title as string}
        </h1>
      </BoxLayout>

      <BoxLayout className="py-0">
        <Ingress className="max-w-[712px]">
          Våre ikoner kommer fra Streamline-biblioteket, og vi har et forhåndsdefinert sett med
          ikoner som brukes i Gyldendals digitale produkter. Streamline er en grafisk harmonisk
          ikonbank med flere unike kolleksjoner som kan kombineres etter behov. Vi benytter
          «Streamline Regular», et enkelt og konsistent formspråk som tydelig kommuniserer
          handlinger og informasjon til brukeren.
        </Ingress>
      </BoxLayout>

      <BoxLayout>
        <Link
          target="_blank"
          href={"https://dam-p-gyldendal.pqcloud.eu/?w=ZqxPo6bFjq"}
          className="flex gap-[8px] text-[16px] leading-[1.15] text-link hover:underline"
        >
          Ikonsett
          <IconExternalLink />
        </Link>
      </BoxLayout>

      <IconGrid />
    </ArticleWrapper>
  )
}
