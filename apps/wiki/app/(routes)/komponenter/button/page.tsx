import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { ContentSection } from "@/components/content-section"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"
import { ButtonSection } from "./_components/button-section"
import { InteractiveStatesSection } from "./_components/interactive-states-section"
import { PracticeSection } from "./_components/practice-section"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Button",
  image: placeholderImageUrl({}),
  description:
    "En knappkomponent brukes for å utføre en bestemt handling eller trigge en hendelse. Teksten på knappen må tydelig beskrive hva som vil skje når den trykkes på.",
}

const subheading =
  "En knappkomponent brukes for å utføre en bestemt handling eller trigge en hendelse. Teksten på knappen må tydelig beskrive hva som vil skje når den trykkes på."

export default function ButtonPage() {
  return (
    <SectionLayout>
      <TextCollection heading="Button" subheading={subheading} />
      <ContentSection
        textCollection={{
          heading: "Primirknapp",
          ingress:
            "Brukes som hovedhandling på en side. Knappen finnes i flere fargeutførelser avhengig av konteksten den brukes i. Identitetsfargen karminrød og lys aubergine er ofte brukt på både lys og mørk bakgrunn.",
        }}
      >
        <ButtonSection level="primary" />
      </ContentSection>
      <ContentSection
        textCollection={{
          heading: "Sekundærknapp",
          ingress:
            "Brukes til mindre viktige handlinger. Står ofte sammen med primærknappen. Den finnes i flere fargeutførelser avhengig av konteksten den brukes i.",
        }}
      >
        <ButtonSection level="secondary" />
      </ContentSection>
      <PracticeSection />
      <InteractiveStatesSection />
    </SectionLayout>
  )
}
