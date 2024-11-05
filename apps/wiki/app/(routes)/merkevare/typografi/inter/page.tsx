import { InterTypography } from "@/data/typography"
import { PageDetails } from "@/types/types"
import { pagePathname } from "@/lib/utils"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"
import { TypographyList } from "@/components/typography-list"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "UI-font: Inter",
  image:
    "https://dam-p-gyldendal.pqcloud.eu/authkey/xD6Ek5kB61/preview/CVfEZzAPqUGASn21lmiGDZ/previews/maxWidth_1600_maxHeight_1600.jpg/*/Inter_preview.jpg?_=1",
  description:
    "Inter er en open source-font som brukes på komponenter i brukergrensesnitt, og i digitale tekster hvor det finnes pedagogiske behov for ulike varianter av bokstaver og tegn.",
}

const ingress = `Inter er en open source-font som brukes på komponenter i brukergrensesnitt, og i digitale tekster hvor det finnes pedagogiske behov for ulike varianter av bokstaver og tegn.

Inter er en funksjonell font med lite identitet, og er optimal for bruk på små tekster i funksjonelle komponenter og brukergrensesnitt. 

Inter brukes aldri brukes på markedsflater.`

export default function InterPage() {
  return (
    <SectionLayout>
      <TextCollection heading={metadata.title as string} ingress={ingress} />
      <TypographyList items={InterTypography} />
    </SectionLayout>
  )
}
