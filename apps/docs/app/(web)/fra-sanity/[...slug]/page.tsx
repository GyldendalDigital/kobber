import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { sanityFetch } from "@/sanity/lib/live"
import { querySlugPageData, querySlugPagePaths } from "@/sanity/lib/queries"
import { getMetaData } from "@/lib/seo"
import { RouterLink } from "@/components/global/router-link"
import { PageBuilder } from "@/components/page-builder/page-builder"

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

  console.log("page", pageData)

  return !Array.isArray(pageBuilder) || pageBuilder?.length === 0 ? (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 text-2xl font-semibold capitalize">{title}</h1>
      <p className="mb-6 text-muted-foreground">
        This page has no content blocks yet.
        {pageData.children?.length && (
          <>
            <br />
            <br />
            Gå til underside i stedet:
            <br />
            {pageData.children.map((child) => (
              <RouterLink key={child._id} href={child.slug.replace("/", "")}>
                {child.title}
              </RouterLink>
            ))}
          </>
        )}
      </p>
    </div>
  ) : (
    <PageBuilder pageBuilder={pageBuilder} id={_id} type={_type} />
  )
}
