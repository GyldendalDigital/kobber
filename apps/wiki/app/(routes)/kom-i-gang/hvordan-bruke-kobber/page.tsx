import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Hvordan bruke Kobber",
  image: placeholderImageUrl({}),
  description: "",
}

export default function HvordanBrukeKobber() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Hvordan bruke Kobber"
        ingress="Merkevaren vår består av en merkevareplattform med strategi og kjerneverdier for Gyldendals identitet. Kobber fungerer som en felles verktøykasse, med visuell identitet, digitalt komponentbibliotek, malverk og retningslinjer. "
        text="Disse elementene kommer til uttrykk i digitale produkter, markedsføring og fysiske produkter, som skal skape en felles forståelse for Gyldendals verdier og gi en tydelig retning for markedsføring og utvikling."
      />
    </SectionLayout>
  )
}
