import type { Metadata } from "next"
import type { Maybe } from "@/types/types"
import { APP_NAME } from "./constants"

interface OgImageOptions {
  type?: string
  id?: string
}

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
}

function getOgImage({ type, id }: OgImageOptions = {}): string {
  const params = new URLSearchParams()
  if (id) params.set("id", id)
  if (type) params.set("type", type)
  const baseUrl = getBaseUrl()
  const logoUrl = `${baseUrl}/api/og?${params.toString()}`
  return logoUrl
}

interface MetaDataInput {
  _type?: Maybe<string>
  seoDescription?: Maybe<string>
  seoTitle?: Maybe<string>
  slug?: Maybe<{ current: string | null }> | string | null
  title?: Maybe<string>
  description?: Maybe<string>
  _id?: Maybe<string>
  seoNoIndex?: boolean
}

export function getMetaData(data: MetaDataInput): Metadata {
  const { _type, seoDescription, seoTitle, slug, title, description, _id } = data ?? {}

  const baseUrl = getBaseUrl()
  const pageSlug = typeof slug === "string" ? slug : (slug?.current ?? "")
  const pageUrl = `${baseUrl}${pageSlug}`

  const meta = {
    title: seoTitle ?? title ?? "",
    description: seoDescription ?? description ?? "",
  }

  // const ogImage = getOgImage({
  //   type: _type ?? undefined,
  //   id: _id ?? undefined,
  // })

  return {
    robots: data?.seoNoIndex ? "noindex" : "index, follow",
    title: `${meta.title} | ${APP_NAME}`,
    description: meta.description,
    metadataBase: new URL(baseUrl),
    creator: APP_NAME,
    authors: [{ name: APP_NAME }],
    icons: {
      icon: `${baseUrl}/favicon.ico`,
    },
    keywords: ["designsystem", "gyldendal", "komponenter", "komponentbibliotek"],
    twitter: {
      card: "summary_large_image",
      // images: [ogImage],
      creator: "@Gyldendal_no",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      countryName: "Norway",
      locale: "nb_NO",
      description: meta.description,
      title: meta.title,
      // images: [
      //   {
      //     url: ogImage,
      //     width: 1200,
      //     height: 630,
      //     alt: meta.title,
      //     secureUrl: ogImage,
      //   },
      // ],
      url: pageUrl,
    },
  }
}
