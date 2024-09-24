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
    <div className="max-w-full flex flex-col gap-48">
      {headerImage ? (
        <div className="relative overflow-hidden  max-w-full h-320 rounded-16">
          <Image src={headerImage} fill className="object-cover" alt="Header Image" />
        </div>
      ) : null}
    </div>
  );
}
