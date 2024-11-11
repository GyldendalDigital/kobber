import { UIColors } from "@/data/color-palettes"
import { PageDetails } from "@/types/types"
import { pagePathname } from "@/lib/utils"
import { ColorBlockGrid } from "@/components/color-block-grid"
import { ArticleWrapper, Body, Ingress } from "@/components/kobber-components"
import { SectionLayout } from "@/components/section-layout"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "UI-farger",
  image:
    "https://dam-p-gyldendal.pqcloud.eu/authkey/46Srf1n-yb/preview/0B8KFix1aoOBfZrSchmiFk/previews/maxWidth_1600_maxHeight_1600.jpg/*/UI_preview.jpg?_=1",
  description:
    "Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som skal kommunisere til sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral palett.",
}

export default function UiFarger() {
  return (
    <SectionLayout>
      <ArticleWrapper>
        <h2 className="text-[48px] text-[#691837]">{metadata.title as string}</h2>
        <Ingress>
          Vi har noen farger som er forbeholdt digitale grensesnitt. Dette inkluderer farger som
          skal kommunisere til sluttbrukeren om suksess, informasjon og advarsler, samt en nøytral
          palett.
        </Ingress>
      </ArticleWrapper>

      {UIColors.map((theme, index) => (
        <ArticleWrapper key={index}>
          <h5 className="text-[24px] text-[#481125]">{theme.title}</h5>
          <Body>{theme.description}</Body>
          <ColorBlockGrid colors={theme.colors} enableCopy />
        </ArticleWrapper>
      ))}
    </SectionLayout>
  )
}
