import { GetStartedRoutesData } from "@/data/routes-data";
import Image from "next/image";
import { notFound } from "next/navigation";

type GetStartedSlugPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return GetStartedRoutesData.map((x) => ({
    slug: x.href.split("/").reverse()[0],
  }));
}

export default function GetStartedSlugPage({
  params,
}: GetStartedSlugPageProps) {
  const { slug } = params;

  const [content] = GetStartedRoutesData.filter((route) =>
    route.href.includes(slug),
  );

  if (!content) {
    return notFound();
  }

  const { description, title, headerImage, topicTitle, text } = content;
  return (
    <div className=" flex flex-col gap-48 ">
      {headerImage ? (
        <div className="relative overflow-hidden  max-w-full h-320 rounded-16">
          <Image
            src={headerImage}
            fill
            className="object-cover"
            alt="Header Image"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-[24px] ">
        <div className="grid gap-8">
          {topicTitle ? (
            <h1 className="leading-[57.6px] text-[48px] text-[#481125] font-light">
              {topicTitle}
            </h1>
          ) : null}
          <h2 className="leading-[57.6px] text-[48px] text-[#DC134F]">
            {title}
          </h2>
        </div>

        <p className="text-[24px] leading-[33.6px] text-[#532D37] max-w-[712px]">
          {description}
        </p>

        <p className="whitespace-pre-wrap text-16 leading-[24px] text-[#532D37] max-w-[712px]">
          {text}
        </p>
      </div>
    </div>
  );
}
