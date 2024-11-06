import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box-grid"
import { Heading } from "@/components/heading"
import { Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"
import { metadata as merkevareFargerPage } from "./identitetspalett/page"
import { metadata as merkevareTemafargerPage } from "./temafarger/page"
import { metadata as merkevareFargerUiFargerPage } from "./ui-farger/page"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Farger",
  image: placeholderImageUrl({}),
  children: [merkevareFargerPage, merkevareTemafargerPage, merkevareFargerUiFargerPage],
  description:
    "Farger er en viktig del av Gyldendals merkevare, og er laget for å balansere det funksjonelle og det emosjonelle. Fargepaletten er laget for å håndtere et bredt utvalg av ulike målgrupper.",
}

export default function FargerSection() {
  return (
    <SectionLayout>
      <div>
        <Heading text={metadata.title as string} />
        <Ingress>
          Gyldendals fargepalett er laget for å balansere det funksjonelle og det emosjonelle, og
          håndtere et bredt utvalg av ulike målgrupper. Det skal være varmt og gjenkjennelig,
          samtidig som det skal være behagelig i daglig bruk av digitale tjenester. Mangfold er en
          av Gyldendals viktigste verdier, og det skal derfor være lett å lage fargekombinasjoner
          som oppfyller kravene til universell utforming.
        </Ingress>
      </div>

      <FeatureBoxGrid items={metadata.children ?? []} />
    </SectionLayout>
  )
}
