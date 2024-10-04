import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { TypographyList } from "@/components/typography-list";
import { PPMoriTypography } from "@/data/typography";
import { pagePathname, placeholderImageUrl, documentTitle } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { Metadata } from "next";

export const pageDetailsPP: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "PP Mori",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsPP.title),
  description:
    "PP Mori er Gyldendals identitetsbærende hovedskrift og benyttes i Gyldendal på alle nivåer i vår kommunikasjon - fra logoer til overskrifter, brødtekst og fotnoter.",
};

const ingress = `PP Mori er Gyldendals identitetsbærende hovedskrift og benyttes i Gyldendal på alle nivåer i vår kommunikasjon - fra logoer til overskrifter, brødtekst og fotnoter.

Samtidig som den har et moderne grotesk uttrykk, har PP Mori også flere karakteristikker som gjør skriften vennlig og uhøytidelig. Fonten bygger sin identitet rundt bokstaven G og sine overdrevne diakritiske tegn, og den kraftige avrundingen i G-versalen spiller godt sammen med Gyldendals andre identitetsbærende visuelle grep. F-minuskelen gir et lite hint til det digitale.

I vanlig typografisk bruk er det lov å benytte seg av vektene fra Light til Bold, men Regular, Book og Semi Bold er de mest brukte vektene. Til bruk i logoen benyttes variabelvekting.`;

export default function PPMoriPage() {
  return (
    <SectionLayout>
      <TextCollection heading={pageDetailsPP.title} ingress={ingress} />
      <TypographyList items={PPMoriTypography} />
    </SectionLayout>
  );
}
