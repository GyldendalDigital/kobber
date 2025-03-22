import { sanityFetch } from "@/sanity/lib/live"
import { queryHomePageData } from "@/sanity/lib/queries"
import { getMetaData } from "@/lib/seo"
import { cn } from "@/lib/utils"
import { PageBuilder } from "@/components/page-builder/page-builder"
import pageLayoutStyles from "@/styles/page-layout.module.css"
import { HeroBanner } from "../(routes)/(landing)/hero-banner"
import styles from "../(routes)/(landing)/landing.module.css"

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
  console.log("home page", homePageData.data)
  return getMetaData(homePageData.data)
}

export default async function Page() {
  const { data: homePageData } = await fetchHomePageData()

  if (!homePageData) {
    return <div>No home page data</div>
  }

  const { _id, _type, pageBuilder } = homePageData ?? {}

  return (
    <main className={cn("home-page", styles.landing, pageLayoutStyles["page-spacing"])}>
      <HeroBanner />

      <PageBuilder pageBuilder={pageBuilder ?? []} id={_id} type={_type} />
    </main>
  )
}

// const boxes: FeatureBoxType[] = [
//   {
//     title: "Introduksjon av Kobber",
//     href: metaGettingStarted.href,
//     image: metaGettingStarted.image,
//   },
//   {
//     title: "Vår nye Gyldendal-logo",
//     image: metaBrandLogoGyldendal.image,
//     href: metaBrandLogoGyldendal.href,
//   },
//   {
//     title: "Vår nye fargepalett",
//     image: metaBrandColor.image,
//     href: metaBrandColor.href,
//   },
//   {
//     title: "Fonter",
//     image: metaBrandTypography.image,
//     href: metaBrandTypography.href,
//   },
// ]
