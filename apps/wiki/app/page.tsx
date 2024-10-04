import { HeroBanner } from "@/components/hero-banner";
import GylImage from "@/public/gyl-art.png";
import { FeatureBoxType, AwardType } from "@/types/types";
import { AwardListItem } from "@/components/award-list-item";
import { placeholderImageUrl } from "@/lib/utils";
import { FeatureBoxGrid } from "@/components/feature-box-grid";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="space-y-20">
      <main className="flex flex-col gap-0 md:gap-30 pb-20">
        <HeroBanner image={GylImage} />
        <div className="pt-48 md:py-0 pb-0 flex flex-col gap-14">
          <div className="grid gap-5">
            <h2 className="text-text/color/primary/heading-s text-primary-heading-s font-normal px-main ">Utforsk</h2>
            <FeatureBoxGrid items={boxes()} />
          </div>

          <div className="grid px-main ">
            <div className="min-h-96 flex flex-col gap-16">
              <h3 className="text-text/color/primary/title-m text-primary-title-m">Hva er nytt?</h3>
              {news()
                .slice(0, 3)
                .map((item, index) => (
                  <AwardListItem key={index} award={item} />
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const boxes = (): FeatureBoxType[] => [
  {
    title: "Er du UI/UX-designer?",
    href: "/kom-i-gang",
    image: placeholderImageUrl({ textRows: ["placeholder", "UX"] }),
  },
  {
    title: "Skriver du kode?",
    image: placeholderImageUrl({ textRows: ["placeholder", "kode"] }),
  },
  {
    title: "Lager du innhold?",
    image: placeholderImageUrl({ textRows: ["placeholder", "innhold"] }),
    href: "/komponenter",
  },
  {
    title: "Markedsfører du?",
    image: placeholderImageUrl({ textRows: ["placeholder", "markedsføring"] }),
  },
];

const news = (): AwardType[] => [
  {
    title: "Nyeste nyhet",
    date: new Date(),
  },
  {
    title:
      "Nest nyeste nyhet - denne har litt lengre tekst som kan gå langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt langt over maksbredde",
    date: new Date("2023"),
  },
  {
    title: "Den nest eldste nyheten - siste vises ikke fordi det bare er plass til tre",
    date: new Date("2022"),
  },
  {
    title: "Den eldste nyheten",
    date: new Date("2021"),
  },
];
