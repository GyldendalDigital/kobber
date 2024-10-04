import { pagePathname, placeholderImageUrl, documentTitle } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const pageDetailsKomponenter: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Komponenter",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsKomponenter.title),
};

export default function ComponentsPage() {
  return redirect(`${pageDetailsKomponenter.href}/button`);
}
