import { FeatureBox } from "@/components/feature-box";
import { ComponentsRoutesData } from "@/data/routes-data";
import { FeatureBoxType } from "@/types/types";
import Image from "next/image";
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

export default function ComponentsSection({ params }: ComponentsSectionProps) {
  const { slug } = params;

  const [content] = ComponentsRoutesData.filter(route => route.href.includes(slug));

  if (!content) {
    return notFound();
  }

  const { description, title, headerImage, topicTitle, text } = content;
  return (
    <section className="max-w-full flex flex-col gap-[48px]">
      {headerImage ? (
        <div className="relative overflow-hidden  max-w-full h-[293px] rounded-[16px]">
          <Image src={headerImage} fill className="object-cover" alt="Header Image" />
        </div>
      ) : null}

      <div className="flex flex-col gap-[24px]">
        <div className="space-y-1">
          {topicTitle ? <h1 className="leading-[57.6px] text-[48px] text-[#DC134F] font-light">{topicTitle}</h1> : null}
          <h2 className="leading-[57.6px] text-[48px] text-[#481125]">{title}</h2>
        </div>

        <p className="text-[24px] leading-[33.6px] text-[#532D37]">{description}</p>

        <p className="whitespace-pre-wrap text-16 leading-[24px] text-[#532D37]">{text}</p>
      </div>

      {boxes.map(box => (
        <FeatureBox key={box.title} item={box} />
      ))}
    </section>
  );
}
