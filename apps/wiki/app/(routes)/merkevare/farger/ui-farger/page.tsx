import { UIColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { damImageUrl } from "@/lib/damImageLoader"
import { pagePathname } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "UI-farger",
  image: damImageUrl("0B8KFix1aoOBfZrSchmiFk"),
  description:
    "Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som skal kommunisere til sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral palett.",
}

export default function UiFarger() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <h2 className="text-[48px] text-[#691837]">{metadata.title as string}</h2>
        <Ingress>{metadata.description}</Ingress>
      </ArticleWrapper>

      {UIColors.map((theme, index) => (
        <ArticleWrapper key={index} className="gap-0">
          <h5 className="text-[24px] text-[#481125]">{theme.title}</h5>
          <Body>{theme.description}</Body>
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ArticleWrapper>
      ))}
    </SectionLayout>
  )
}
