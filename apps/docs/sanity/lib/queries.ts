import { defineQuery } from "next-sanity"

// Base fragments for reusable query parts
const imageFragment = /* groq */ `
  image{
    ...,
    "alt": coalesce(asset->altText, asset->originalFilename, "Image-Broken"),
    "blurData": asset->metadata.lqip,
    "dominantColor": asset->metadata.palette.dominant.background,
  }
`

const customLinkFragment = /* groq */ `
  ...customLink{
    openInNewTab,
    "href": select(
      type == "internal" => internal->slug.current,
      type == "external" => external,
      "#"
    ),
  }
`

const markDefsFragment = /* groq */ `
  markDefs[]{
    ...,
    ${customLinkFragment}
  }
`

const richTextFragment = /* groq */ `
  richText[]{
    ...,
    ${markDefsFragment}
  }
`

const childPageFragment = /* groq */ `
  {
    title,
    "slug": slug.current,
    "image": damAsset.previewUrl,
  }
`

// Page builder block fragments
const richTextBlock = /* groq */ `
  _type == "richTextBlock" => {
    ...,
    ${richTextFragment},
  }
`
const contactListBlock = /* groq */ `
  _type == "contactListBlock" => {
    ...,
    title,
  }
`

const linkListBlock = /* groq */ `
  _type == "listListBlock" => {
    ...,
    links,
  }
`

const colorListBlock = /* groq */ `
  _type == "colorListBlock" => {
    ...,
    ${richTextFragment},
    colors,
  }
`

const heroBlock = /* groq */ `
  _type == "heroBlock" => {
    ...,
    ${imageFragment},
  }
`

const embedBlock = /* groq */ `
  _type == "embedBlock" => {
    title,
    url,
    height,
    inline,
  }
`

const featureBoxBlock = /* groq */ `
  _type == "featureBoxBlock" => {
    ...,
    "features": features[]->${childPageFragment}
  }
`

const pageBuilderFragment = /* groq */ `
  pageBuilder[]{
    ...,
    _type,
    ${richTextBlock},
    ${contactListBlock},
    ${heroBlock},
    ${embedBlock},
    ${featureBoxBlock},
    ${linkListBlock},
    ${colorListBlock},
  }
`

export const queryHomePageData =
  defineQuery(/* groq */ `*[_type == "homePage" && _id == "homePage"][0]{
    ...,
    _id,
    _type,
    "slug": slug.current,
    richText,
    ${pageBuilderFragment}
  }`)

export const querySlugPageData = defineQuery(/* groq */ `
  *[_type == "page" && slug.current == $slug][0]{
    ...,
    "slug": slug.current,
    "children": children[]->${childPageFragment},
    "image": damAsset.previewUrl,
    ${pageBuilderFragment}
  }
`)

export const querySlugPagePaths = defineQuery(/* groq */ `
  *[_type == "page" && defined(slug.current)].slug.current
`)

const ogFieldsFragment = /* groq */ `
  _id,
  _type,
  "title": select(
    defined(ogTitle) => ogTitle,
    defined(seoTitle) => seoTitle,
    title
  ),
  "description": select(
    defined(ogDescription) => ogDescription,
    defined(seoDescription) => seoDescription,
    description
  ),
  "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",
  "dominantColor": image.asset->metadata.palette.dominant.background,
  "seoImage": seoImage.asset->url + "?w=1200&h=630&dpr=2&fit=max", 
  "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max&q=100",
  "date": coalesce(date, _createdAt)
`

export const queryHomePageOGData = defineQuery(/* groq */ `
  *[_type == "homePage" && _id == $id][0]{
    ${ogFieldsFragment}
  }
  `)

export const querySlugPageOGData = defineQuery(/* groq */ `
  *[_type == "page" && _id == $id][0]{
    ${ogFieldsFragment}
  }
`)

export const queryGenericPageOGData = defineQuery(/* groq */ `
  *[ defined(slug.current) && _id == $id][0]{
    ${ogFieldsFragment}
  }
`)

export const queryFooterData = defineQuery(/* groq */ `
  *[_type == "footer" && _id == "footer"][0]{
    _id,
    subtitle,
    columns[]{
      _key,
      title,
      links[]{
        _key,
        name,
        "openInNewTab": url.openInNewTab,
        "href": select(
          url.type == "internal" => url.internal->slug.current,
          url.type == "external" => url.external,
          url.href
        ),
      }
    },
    "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max",
    "siteTitle": *[_type == "settings"][0].siteTitle,
    "socialLinks": *[_type == "settings"][0].socialLinks,
  }
`)

export const queryNavbarData = defineQuery(/* groq */ `
  *[_type == "navbar" && _id == "navbar"][0]{
    _id,
    children[]->${childPageFragment},
  }
`)

export const queryNavbarSmallScreenData = defineQuery(/* groq */ `
  *[_type == "navbar" && _id == "navbar"][0]{
    _id,
    children[]-> {...${childPageFragment}, children[]-> ${childPageFragment}}
  }
`)

const sideMenuItemFragment = /* groq */ `
  {
    title,
    "slug": slug.current,
    status,
    group
  }
`

export const querySideMenuData = defineQuery(/* groq */ `
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    children[]-> {...${sideMenuItemFragment}, children[]-> ${sideMenuItemFragment}}
  }
`)

export const querySitemapData = defineQuery(/* groq */ `{
  "slugPages": *[_type == "page" && defined(slug.current)]{
    "slug": slug.current,
    "lastModified": _updatedAt
  },
}`)
