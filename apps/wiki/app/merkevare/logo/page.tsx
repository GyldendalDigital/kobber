import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { pagePathname, placeholderImageUrl, documentTitle } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { Metadata } from "next";

export const pageDetailsLogo: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Logo",
  image: placeholderImageUrl({}),
  status: "kommer",
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsLogo.title),
  description: "",
};

export default function Page() {
  return (
    <SectionLayout>
      <TextCollection heading={pageDetailsLogo.title} ingress="" />
    </SectionLayout>
  );
}
