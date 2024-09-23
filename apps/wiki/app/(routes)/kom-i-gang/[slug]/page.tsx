import { GetStartedRoutesData } from "@/data/routes-data";
import Image from "next/image";
import { notFound } from "next/navigation";

type GetStartedSlugPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return GetStartedRoutesData.map(x => ({ slug: x.href.split("/").reverse()[0] }));
}

export default function GetStartedSlugPage({ params }: GetStartedSlugPageProps) {
  const { slug } = params;

  const [content] = GetStartedRoutesData.filter(route => route.href.includes(slug));

  if (!content) {
    return notFound();
  }

  const { description, title, headerImage, topicTitle, text } = content;
  return (
    <div className="max-w-full flex flex-col gap-[48px]">
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

        <p className="whitespace-pre-wrap text-body leading-[24px] text-[#532D37]">{text}</p>
      </div>
    </div>
  );
}
