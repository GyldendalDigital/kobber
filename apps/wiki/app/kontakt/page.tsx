import { InformationCard } from "@/components/information-card";
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils";
import { PageDetails, InformationCardType } from "@/types/types";
import { Metadata } from "next";

export const pageDetailsKontakt: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Kontakt",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsKontakt.title),
};

const team: InformationCardType[] = [
  {
    title: "Irén Andresen",
    text: `Senior designer
    ansvarlig for Kobber - merkevare
    iren.andresen@gyldednal.no`,
  },
  {
    title: "Izelin Tujunen",
    text: `Senior Designer
    ansvarlig for Kobber - designssytem
    iren.andresen@gyldendal.no
    `,
  },
  {
    title: "Dagfinn Reitan",
    text: `Senior utvikler
    ansvarlig for teknisk utvikling
    dagfinn.reitan@gyldendal.no`,
  },
  {
    title: "Dag Von Krogh Munkholt",
    text: "Designer",
  },
  {
    title: "Kevin Minh Nguyen",
    text: "Utvikler",
  },
  {
    title: "Karen Keiserud",
    text: `Direktør for kommunikasjon,
    merkevarer og samfunnskontakt`,
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-48 max-w-max-width mx-auto ">
      <div className="flex flex-col gap-[24px]  w-full md:w-[806px]">
        <div className="space-y-1">
          <h1 className="leading-[57.6px] text-[48px] text-[#481125] font-light">
            Trenger du hjelp?
          </h1>
        </div>

        <p className="text-[24px] leading-[33.6px] text-[#532D37] ">
          Ikke nøl å ta kontakt med oss om du spørsmål, innspill og/eller
          tilbakemeldinger.
        </p>

        <p className="whitespace-pre-wrap text-16 leading-[24px] text-[#532D37]">
          Se gjerne en runde på denne siden, eller sjekk Slack-kanalen vår
          “Kobber” hvis det er noe du lurer på. Sjansen kan jo være at temaet du
          lurer på er noe som har blitt diskutert tidligere.
          <br />
          <br />
          Ellers vil én designer og utvikler også være tilgjengelig for drop-in
          hver torsdag på “Hjeeelp” i Bing 4.etasje. Så ta med deg kaffekoppen,
          så setter vi oss ned å ser på utfordringen sammen!
        </p>
      </div>
      <div className="grid gap-24">
        <h3 className="text-[#532D37] text-[24px] md:text-left text-center">
          Vi i Kobber teamet
        </h3>
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-56 md:gap-24">
          {team.map((person) => (
            <InformationCard key={person.title} item={person} />
          ))}
        </div>
      </div>
    </div>
  );
}
