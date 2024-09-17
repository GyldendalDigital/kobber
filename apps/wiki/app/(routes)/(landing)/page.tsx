"use client";
import { HeroBanner } from "@/components/hero-banner";
import GylImage from "@/public/gyl-art.png";
import { FeatureBoxType, NewsType } from "@/types/types";
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

const news: NewsType[] = [
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
    <main className="flex flex-col gap-0 md:gap-10 pb-10">
      <HeroBanner image={GylImage} />
      {/* MAIN CONTENT */}
      <div className="pt-[48px] px-[16px] md:py-0 md:px-[64px] pb-0 flex flex-col gap-14">
        <div className="grid gap-5">
          <h2 className="text-text/color/primary/heading-s text-[28px] font-normal">Utforsk</h2>
          <FeatureBoxGrid items={boxes} className="md:grid-cols-4" />
        </div>

        <div className="grid gap-[64px] px-[16px]">
          <div className="h-[182px] grid gap-[16px]">
            <h3 className="text-text/color/primary/title-m text-[23px]">Hva er nytt?</h3>
            {news.map((item, index) => (
              <AwardListItem key={index} award={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
