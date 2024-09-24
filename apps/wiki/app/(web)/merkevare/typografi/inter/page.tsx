import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { TypographyList } from "@/components/typography-list";
import { InterTypography } from "@/data/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inter | Kobber Wiki",
  description:
    "Inter er en open source-font som brukes på komponenter i brukergrensesnitt, og i digitale tekster hvor det finnes pedagogiske behov for ulike varianter av bokstaver og tegn.",
};

const ingress = `Inter er en open source-font som brukes på komponenter i brukergrensesnitt, og i digitale tekster hvor det finnes pedagogiske behov for ulike varianter av bokstaver og tegn.

Inter er en funksjonell font med lite identitet, og er optimal for bruk på små tekster i funksjonelle komponenter og brukergrensesnitt. 

Inter brukes aldri brukes på markedsflater.`;

export default function InterPage() {
  return (
    <SectionLayout>
      <TextCollection heading="Lyon Display" ingress={ingress} />
      <TypographyList items={InterTypography} />
    </SectionLayout>
  );
}
