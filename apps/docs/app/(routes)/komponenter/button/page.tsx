import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"
import { ContentLayout } from "@/components/content-layout"
import { ContentSection } from "@/components/content-section"
import { TextCollection } from "@/components/text-collection"
import { ButtonSection } from "./_components/button-section"
import { InteractiveStatesSection } from "./_components/interactive-states-section"
import { PracticeSection } from "./_components/practice-section"
import { metaComponentsButton } from "./button.meta"

export const metadata = metaComponentsButton

export default function ButtonPage() {
  return (
    <ContentLayout>
      <TextCollection heading="Button" subheading={metadata.description} />
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
    </ContentLayout>
  )
}
