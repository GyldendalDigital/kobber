import { BrandingRoutesData } from "@/data/routes-data";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Merkevare | Kobber Wiki",
  description:
    "Merkevare er en samling av designelementer som sammen skaper en helhetlig opplevelse for brukeren. Dette inkluderer farger, fonter, ikoner og illustrasjoner.",
};

export default function BrandingPage() {
  return redirect(BrandingRoutesData[3].slug);
}
