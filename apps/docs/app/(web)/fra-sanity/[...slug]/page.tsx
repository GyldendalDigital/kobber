import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { sanityFetch } from "@/sanity/lib/live"
import { querySlugPageData, querySlugPagePaths } from "@/sanity/lib/queries"
import { getMetaData } from "@/lib/seo"
import { cn } from "@/lib/utils"
import { RouterLink } from "@/components/global/router-link"
import { metaBrandNavigationGroups } from "@/components/navigation/navigation-map"
import { SideNav } from "@/components/navigation/side-nav"
import { PageBuilder } from "@/components/page-builder/page-builder"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { WoodWingImage } from 'sanity-plugin-woodwing-assets'

async function fetchSlugPageData(slug: string) {
  return await sanityFetch({
    query: querySlugPageData,
    params: { slug: `/${slug}` },
  })
}

async function fetchSlugPagePaths() {
  const slugs = await client.fetch(querySlugPagePaths)
  const paths: { slug: string[] }[] = []
  for (const slug of slugs) {
    if (!slug) continue
    const parts = slug.split("/").filter(Boolean)
    paths.push({ slug: parts })
  }
  return paths
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const slugString = slug.join("/")
  const { data: pageData } = await fetchSlugPageData(slugString)
  if (!pageData) {
    return getMetaData({})
  }
  return getMetaData(pageData)
}

export async function generateStaticParams() {
  return await fetchSlugPagePaths()
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const slugString = slug.join("/")
  const { data: pageData } = await fetchSlugPageData(slugString)

  if (!pageData) {
    return notFound()
  }

  const { title, pageBuilder, _id, _type } = pageData ?? {}

  return <>
    <WoodWingImage
      asset={pageData.image}
      width={800}
      height={400}
      className="article-image"
    />
  </>

}
