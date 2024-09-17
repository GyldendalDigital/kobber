import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import { TypographyList } from "@/components/typography-list";
import { TypographyListItem } from "@/components/typography-list-item";
import { PPMoriTypography } from "@/data/typography";

const ingress = `PP Mori er Gyldendals identitetsbærende hovedskrift og benyttes i Gyldendal på alle nivåer i vår kommunikasjon - fra logoer til overskrifter, brødtekst og fotnoter.

Samtidig som den har et moderne grotesk uttrykk, har PP Mori også flere karakteristikker som gjør skriften vennlig og uhøytidelig. Fonten bygger sin identitet rundt bokstaven G og sine overdrevne diakritiske tegn, og den kraftige avrundingen i G-versalen spiller godt sammen med Gyldendals andre identitetsbærende visuelle grep. F-minuskelen gir et lite hint til det digitale.

I vanlig typografisk bruk er det lov å benytte seg av vektene fra Light til Bold, men Regular, Book og Semi Bold er de mest brukte vektene. Til bruk i logoen benyttes variabelvekting.`;

export default function PPMoriPage() {
  return (
    <SectionLayout>
      <TextCollection heading="PP MORI" ingress={ingress} />
      <TypographyList items={PPMoriTypography} />
    </SectionLayout>
  );
}
