import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { TypographyList } from "@/components/typography-list";
import { LyonTypography } from "@/data/typography";
import { pagePathname, placeholderImageUrl, documentTitle } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { Metadata } from "next";

export const pageDetailsLyon: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Lyon Display",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsLyon.title),
  description:
    "Lyon Display er en kontemporær tilnærming til en tradisjonell skriftstil, og fungerer som et mer emosjonelt og elegant supplement til primærskriften PP Mori.",
};

const ingress = `Lyon Display er en kontemporær tilnærming til en tradisjonell skriftstil, og fungerer som et mer emosjonelt og elegant supplement til primærskriften PP Mori.

Kan brukes til sitater og som emosjonell kontrast i en redaksjonell overskrift.`;

export default function LyongPage() {
  return (
    <SectionLayout>
      <TextCollection heading={pageDetailsLyon.title} ingress={ingress} />
      <TypographyList items={LyonTypography} />
    </SectionLayout>
  );
}
