import { notFound } from "next/navigation"
import { GetStartedRoutesData } from "@/data/routes-data"
import { HeroImage } from "@/components/hero-image"
import { SectionLayout } from "@/components/section-layout"

type GetStartedSlugPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return GetStartedRoutesData.map((x) => ({
    slug: x.href.split("/").reverse()[0],
  }))
}

export default async function GetStartedSlugPage(props: GetStartedSlugPageProps) {
  const params = await props.params
  const { slug } = params

  const [content] = GetStartedRoutesData.filter((route) => route.href.includes(slug))

  if (!content) {
    return notFound()
  }

  const { description, title, heroImage, topicTitle, text } = content
  return (
    <SectionLayout>
      {heroImage ? <HeroImage src={heroImage} /> : null}
      <div className="grid gap-section/gap/horizontal">
        <div className="gap-y-text-section/gap/header/horizontal grid">
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
    </SectionLayout>
  )
}
