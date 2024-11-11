import { PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname } from "@/lib/utils"
import { ArticleWrapper, BoxLayout, Ingress } from "@/components/kobber-components"
import { IconGrid } from "./icon-grid"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Ikonsett",
  image: damImageUrl("5eWSL54644-8vUcyASwDWy", ".svg"),
  description:
    "Ikonsett er en viktig del av designsystemet vårt, og brukes for å visualisere informasjon og veilede brukeren. Ikoner skal være enkle, tydelige og konsistente, og skal brukes i tråd med retningslinjene våre.",
}

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

      <br />
      <IconGrid />
    </ArticleWrapper>
  )
}
