import { notFound } from "next/navigation"
import { GetStartedRoutesData } from "@/data/routes-data"
import { HeroImage } from "@/components/hero-image"

type GetStartedSlugPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return GetStartedRoutesData.map((x) => ({
    slug: x.href.split("/").reverse()[0],
  }))
}

export default function GetStartedSlugPage({ params }: GetStartedSlugPageProps) {
  const { slug } = params

  const [content] = GetStartedRoutesData.filter((route) => route.href.includes(slug))

  if (!content) {
    return notFound()
  }

  const { description, title, heroImage, topicTitle, text } = content
  return (
    <div className="flex flex-col gap-48">
      {heroImage ? <HeroImage src={heroImage} /> : null}

      <div className="flex flex-col gap-[24px]">
        <div className="grid gap-8">
          {topicTitle ? (
            <h1 className="text-[48px] font-light leading-[57.6px] text-[#481125]">{topicTitle}</h1>
          ) : null}
          <h2 className="text-[48px] leading-[57.6px] text-[#DC134F]">{title}</h2>
        </div>

        <p className="max-w-[712px] text-[24px] leading-[33.6px] text-[#532D37]">{description}</p>

        <p className="text-16 max-w-[712px] whitespace-pre-wrap leading-[24px] text-[#532D37]">
          {text}
        </p>
      </div>
    </div>
  )
}
