import { SectionLayout } from "@/components/section-layout";
import { Metadata } from "next";
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils";
import { PageDetails } from "@/types/types";

export const pageDetailsIdentitetsprinsipper: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Identitetsprinsipper",
  image: placeholderImageUrl({}),
  status: "kommer",
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsIdentitetsprinsipper.title),
  description: "",
};

export default function IdentitetsPrinsipper() {
  return (
    <SectionLayout>
      <div>TODO</div>
    </SectionLayout>
  );
}
