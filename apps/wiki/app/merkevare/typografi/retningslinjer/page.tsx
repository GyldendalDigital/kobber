import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Retningslinjer",
  image: placeholderImageUrl({}),
  description:
    "Kortere linjelengder er vanligvis mer behagelige for leseren enn lengre linjer. Det anbefales derfor at tekstseksjoner har en maksimal bredde på 36rem (864px) for å sikre god lesbarhet og forhindre at linjelengden overstiger omtrent 75-80 tegn, inkludert mellomrom. Husk at brukerne våre kan justere bredden på layouten, noe som betyr at linjelengden ikke alltid kan spesifiseres. Derfor bør vi designe for en ideell linjelengde, og bruke responsive designteknikker for å forutse ulike brukersituasjoner.",
}

const ingress =
  "Kortere linjelengder er vanligvis mer behagelige for leseren enn lengre linjer. Det anbefales derfor at tekstseksjoner har en maksimal bredde på 36rem (864px) for å sikre god lesbarhet og forhindre at linjelengden overstiger omtrent 75-80 tegn, inkludert mellomrom. Husk at brukerne våre kan justere bredden på layouten, noe som betyr at linjelengden ikke alltid kan spesifiseres. Derfor bør vi designe for en ideell linjelengde, og bruke responsive designteknikker for å forutse ulike brukersituasjoner."

export default function GuidelinesPage() {
  return (
    <SectionLayout>
      <TextCollection heading={metadata.title as string} ingress={ingress} />
    </SectionLayout>
  )
}
