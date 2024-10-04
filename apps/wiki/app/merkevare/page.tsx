import { Metadata } from "next";
import { redirect } from "next/navigation";
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { pageDetailsFarge } from "./farger/page";

export const pageDetailsMerkevare: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Merkevare",
  image: placeholderImageUrl({}),
  children: [pageDetailsFarge],
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsMerkevare.title),
  description:
    "Merkevare er en samling av designelementer som sammen skaper en helhetlig opplevelse for brukeren. Dette inkluderer farger, fonter, ikoner og illustrasjoner.",
};

export default function BrandingPage() {
  return redirect(pageDetailsFarge.href);
}
