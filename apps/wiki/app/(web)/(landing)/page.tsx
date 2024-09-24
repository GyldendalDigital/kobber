"use client";
import { HeroBanner } from "@/components/hero-banner";
import GylImage from "@/public/gyl-art.png";
import { FeatureBoxType, AwardType } from "@/types/types";
import { AwardListItem } from "@/components/award-list-item";
import { FeatureBoxGrid } from "@/components/feature-box-grid";

const boxes: FeatureBoxType[] = [
  {
    title: "Er du UI/UX-designer?",
    href: "/kom-i-gang",
    image: "",
  },
  {
    title: "Skriver du kode?",
    image: "",
  },
  {
    title: "Lager du innhold?",
    image: "",
    href: "/komponenter",
  },
  {
    title: "Lager du innhold?",
    image: "",
  },
];

const news: AwardType[] = [
  {
    title: "Dette er nyhet nummer 1",
    date: new Date(),
  },
  {
    title: "Dette er nyhet nummer 2",
    date: new Date(),
  },
  {
    title: "Dette er nyhet nummer 3",
    date: new Date(),
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-0 md:gap-56 pb-20">
      <HeroBanner image={GylImage} />
      {/* MAIN CONTENT */}
      <div className="pt-48 px-16 md:py-0 md:px-64 pb-0 flex flex-col gap-14">
        <div className="grid gap-5">
          <h2 className="text-text/color/primary/heading-s text-primary-heading-s font-normal">Utforsk</h2>
          <FeatureBoxGrid items={boxes} className="md:grid-cols-4" />
        </div>

        <div className="grid  px-16">
          <div className="min-h-96 flex flex-col gap-16">
            <h3 className="text-text/color/primary/title-m text-primary-title-m">Hva er nytt?</h3>
            {news.map((item, index) => (
              <AwardListItem key={index} award={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
