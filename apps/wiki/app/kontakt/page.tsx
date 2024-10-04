import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { documentTitle, pagePathname, placeholderImageUrl } from "@/lib/utils";
import { PageDetails } from "@/types/types";
import { Metadata } from "next";

export const pageDetailsKontakt: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Kontakt",
  image: placeholderImageUrl({}),
};

export const metadata: Metadata = {
  title: documentTitle(pageDetailsKontakt.title),
};

export default function ContactPage() {
  return (
    <div className="max-w-full flex flex-col gap-48">
      <div className="flex flex-col gap-[24px] ">
        <div className="flex flex-col gap-[24px] px-main">
          <div className="space-y-1">
            <h1 className="leading-[57.6px] text-[48px] text-[#481125] font-light">Trenger du hjelp?</h1>
          </div>

          <p className="text-[24px] leading-[33.6px] text-[#532D37]">
            Ikke nøl å ta kontakt med oss om du spørsmål, innspill og/eller tilbakemeldinger.
          </p>

          <p className="whitespace-pre-wrap text-16 leading-[24px] text-[#532D37]">
            Se gjerne en runde på denne siden, eller sjekk Slack-kanalen vår “Kobber” hvis det er noe du lurer på.
            Sjansen kan jo være at temaet du lurer på er noe som har blitt diskutert tidligere. Ellers vil én designer
            og utvikler også være tilgjengelig for drop-in hver torsdag på “Hjeeelp” i Bing 4.etasje. Så ta med deg
            kaffekoppen, så setter vi oss ned å ser på utfordringen sammen!
          </p>
        </div>
        <FeatureBoxGrid
          items={["Irén", "Izelin", "Dagfinn", "Kevin", "Karen"].map(navn => ({
            title: navn,
            image: placeholderImageUrl({ textRows: ["placeholder", navn] }),
          }))}
        />
      </div>
    </div>
  );
}
