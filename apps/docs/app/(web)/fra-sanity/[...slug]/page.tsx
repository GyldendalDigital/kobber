import { draftMode } from "next/headers"
import { notFound, redirect, RedirectType } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { sanityFetch } from "@/sanity/lib/live"
import { querySlugPageData, querySlugPagePaths } from "@/sanity/lib/queries"
import { tryAddSanityHref } from "@/utils/sanity-temp-href"
import { KobberHeading, KobberTextWrapper } from "@gyldendal/kobber-components/react-ssr-safe"
import { getMetaData } from "@/lib/seo"
import { cn, placeholderImageUrl } from "@/lib/utils"
import { FeatureBoxGrid } from "@/components/feature-box/feature-box-grid"
import { SideMenu } from "@/components/navigation/side-menu/side-menu"
import { PageBuilder } from "@/components/page-builder/page-builder"
import pageLayoutStyles from "@/styles/page-layout.module.css"

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
  const { slug: slugs } = await params
  const slug = slugs.join("/")
  const rootSlug = slugs.at(0)
  const { data: pageData } = await fetchSlugPageData(slug)

  if (!pageData) {
    return notFound()
  }

  const { title, pageBuilder, _id, _type, subPageBehavior, children } = pageData ?? {}

  if (subPageBehavior?.includes("redirect")) {
    const firstChild = children?.[0]
    if (firstChild?.slug) {
      return redirect(tryAddSanityHref("/fra-sanity", firstChild.slug), RedirectType.replace)
    }
  }

  const showPageBuilder = Array.isArray(pageBuilder) && pageBuilder.length > 0
  const showSubPageGrid = subPageBehavior?.includes("grid") && children?.length

  return (
    <div className={cn(pageLayoutStyles["page-layout"], pageLayoutStyles["page-spacing"])}>
      {rootSlug && <SideMenu slug={rootSlug} />}
      <main className="slug-page">
        {showPageBuilder && <PageBuilder pageBuilder={pageBuilder} id={_id} type={_type} />}

        {showSubPageGrid && (
          <FeatureBoxGrid
            items={children.map((x) => ({
              ...x,
              href: x.slug,
              image: x.image ?? placeholderImageUrl({ textRows: ["placeholder"], size: "20x20" }),
            }))}
          />
        )}

        {!showPageBuilder && !showSubPageGrid && (
          <KobberTextWrapper>
            <KobberHeading>{title}</KobberHeading>
            <p>Innhold er ikke lagt til enda.</p>
            {(await draftMode()).isEnabled && (
              <small>
                redigeringsmodustips: legg til innhold i page buildern eller velg sub page behavior
                redirect
              </small>
            )}
          </KobberTextWrapper>
        )}
      </main>
    </div>
  )
}
