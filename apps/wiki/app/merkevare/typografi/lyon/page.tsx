import { LyonTypography } from "@/data/typography"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"
import { TypographyList } from "@/components/typography-list"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Lyon Display",
  image: placeholderImageUrl({}),
  description:
    "Lyon Display er en kontemporær tilnærming til en tradisjonell skriftstil, og fungerer som et mer emosjonelt og elegant supplement til primærskriften PP Mori.",
}

const ingress = `Lyon Display er en kontemporær tilnærming til en tradisjonell skriftstil, og fungerer som et mer emosjonelt og elegant supplement til primærskriften PP Mori.

Kan brukes til sitater og som emosjonell kontrast i en redaksjonell overskrift.`

export default function LyongPage() {
  return (
    <SectionLayout>
      <TextCollection heading={metadata.title as string} ingress={ingress} />
      <TypographyList items={LyonTypography} />
    </SectionLayout>
  )
}
