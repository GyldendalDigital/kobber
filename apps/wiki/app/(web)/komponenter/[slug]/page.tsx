import { FeatureBoxGrid } from "@/components/feature-box-grid";
import { ComponentsRoutesData } from "@/data/routes-data";
import { FeatureBoxType } from "@/types/types";
import { notFound } from "next/navigation";

const boxes: FeatureBoxType[] = [
  {
    title: "Komponent",
  },
  {
    title: "Komponent",
  },
  {
    title: "Komponent",
  },
  {
    title: "Komponent",
  },
  {
    title: "Komponent",
  },
  {
    title: "Komponent",
  },
  {
    title: "Komponent",
  },
  {
    title: "Komponent",
  },
  {
    title: "Komponent",
  },
];

type ComponentsSectionProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return ComponentsRoutesData.map(x => ({ slug: x.href.split("/").reverse()[0] }));
}

export default function ComponentsSection({ params }: ComponentsSectionProps) {
  const { slug } = params;

  const [content] = ComponentsRoutesData.filter(route => route.href.includes(slug));

  if (!content) {
    return notFound();
  }

  const { description, title, headerImage, topicTitle, text } = content;
  return (
    <section className="max-w-full flex flex-col gap-48">
      <h1>Empty</h1>
      <FeatureBoxGrid items={boxes} />
    </section>
  );
}
