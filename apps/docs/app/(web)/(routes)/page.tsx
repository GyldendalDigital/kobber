import { sanityFetch } from "@/sanity/lib/live"
import { queryHomePageData } from "@/sanity/lib/queries"
import { getMetaData } from "@/lib/seo"
import { cn } from "@/lib/utils"
import { PageBuilder } from "@/components/page-builder/page-builder"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { HeroBanner } from "./_hero-banner"
import styles from "./homePage.module.css"

async function fetchHomePageData() {
  return await sanityFetch({
    query: queryHomePageData,
  })
}

export async function generateMetadata() {
  const homePageData = await fetchHomePageData()
  if (!homePageData.data) {
    return getMetaData({})
  }
  return getMetaData(homePageData.data)
}

export default async function Page() {
  const { data: homePageData } = await fetchHomePageData()

  if (!homePageData) {
    return <div>No home page data</div>
  }

  const { _id, _type, pageBuilder } = homePageData ?? {}

  return (
    <main className={cn(styles["wrapper"], pageLayoutStyles["page-spacing"])}>
      <HeroBanner />

      <PageBuilder pageBuilder={pageBuilder ?? []} id={_id} type={_type} />
    </main>
  )
}
