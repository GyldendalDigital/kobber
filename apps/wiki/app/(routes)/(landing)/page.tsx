"use client";
import { ContentPane } from "@/components/content-pane";
import GylImage from "@/public/gyl-art.png";
import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { FeatureBoxType } from "@/types/types";
import { KobberGrid } from "@gyldendal/kobber-components/react";

const boxes: FeatureBoxType[] = [
  {
    title: "Er du ny?",
    href: "/kom-i-gang",
    image: "",
  },
  {
    title: "Lager du grensesnitt?",
    image: "",
  },
  {
    title: "Skriver du kode?",
    image: "",
    href: "/komponenter",
  },
  {
    title: "Lager du innhold?",
    image: "",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <ContentPane image={GylImage} />
      <FeatureBoxGrid items={boxes} />
      {/* <KobberCheckbox />
			<KobberProgressBar>
				<KobberProgressBarItem />
			</KobberProgressBar>
			<KobberGrid>
				<div>Div 1</div>
				<div>Div 2</div>
			</KobberGrid> */}
    </main>
  );
}
