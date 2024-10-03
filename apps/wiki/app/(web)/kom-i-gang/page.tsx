import { pagePathname, placeholderImageUrl, documentTitle } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const pageDetailsKomigang: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Kom i gang",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsKomigang.title),
};

export default function GetStartedPage() {
  return redirect(`${pageDetailsKomigang.href}/introduksjon`);
}
