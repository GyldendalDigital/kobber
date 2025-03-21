// Query TypeMap
import "@sanity/client"

/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch"
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: "sanity.imagePalette"
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions"
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: "sanity.fileAsset"
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: "geopoint"
  lat?: number
  lng?: number
  alt?: number
}

export type EmbedBlock = {
  _type: "embedBlock"
  title?: string
  url?: string
}

export type FeatureBoxBlock = {
  _type: "featureBoxBlock"
  features?: Array<{
    _ref: string
    _type: "reference"
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: "page"
  }>
}

export type ContactListBlock = {
  _type: "contactListBlock"
  title?: string
}

export type RichTextBlock = {
  _type: "richTextBlock"
  richText?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: "span"
          _key: string
        }>
        style?: "normal" | "h1" | "h2" | "h3"
        listItem?: "number" | "bullet"
        markDefs?: Array<{
          customLink?: CustomUrl
          _type: "customLink"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: "reference"
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        caption?: string
        _type: "image"
        _key: string
      }
  >
}

export type HeroBlock = {
  _type: "heroBlock"
  image?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
}

export type PageBuilder = Array<
  | ({
      _key: string
    } & HeroBlock)
  | ({
      _key: string
    } & RichTextBlock)
  | ({
      _key: string
    } & ContactListBlock)
  | ({
      _key: string
    } & FeatureBoxBlock)
  | ({
      _key: string
    } & EmbedBlock)
>

export type RichText = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: "span"
        _key: string
      }>
      style?: "normal" | "h1" | "h2" | "h3"
      listItem?: "number" | "bullet"
      markDefs?: Array<{
        customLink?: CustomUrl
        _type: "customLink"
        _key: string
      }>
      level?: number
      _type: "block"
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: "reference"
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      caption?: string
      _type: "image"
      _key: string
    }
>

export type Navbar = {
  _id: string
  _type: "navbar"
  _createdAt: string
  _updatedAt: string
  _rev: string
  label?: string
  columns?: Array<
    | {
        title?: string
        links?: Array<{
          name?: string
          description?: string
          url?: CustomUrl
          _type: "navbarColumnLink"
          _key: string
        }>
        _type: "navbarColumn"
        _key: string
      }
    | {
        name?: string
        url?: CustomUrl
        _type: "navbarLink"
        _key: string
      }
  >
}

export type Footer = {
  _id: string
  _type: "footer"
  _createdAt: string
  _updatedAt: string
  _rev: string
  label?: string
  subtitle?: string
  columns?: Array<{
    title?: string
    links?: Array<{
      name?: string
      url?: CustomUrl
      _type: "footerColumnLink"
      _key: string
    }>
    _type: "footerColumn"
    _key: string
  }>
}

export type Settings = {
  _id: string
  _type: "settings"
  _createdAt: string
  _updatedAt: string
  _rev: string
  label?: string
  siteTitle?: string
  siteDescription?: string
  logo?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  contactEmail?: string
  socialLinks?: {
    linkedin?: string
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
  }
}

export type HomePage = {
  _id: string
  _type: "homePage"
  _createdAt: string
  _updatedAt: string
  _rev: string
  richText?: RichText
  slug?: Slug
  pageBuilder?: PageBuilder
  seoTitle?: string
  seoDescription?: string
  seoImage?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  ogTitle?: string
  ogDescription?: string
}

export type Page = {
  _id: string
  _type: "page"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  description?: string
  slug?: Slug
  image?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  children?: Array<{
    _ref: string
    _type: "reference"
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: "page"
  }>
  pageBuilder?: PageBuilder
  seoTitle?: string
  seoDescription?: string
  seoImage?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  seoNoIndex?: boolean
  ogTitle?: string
  ogDescription?: string
}

export type CustomUrl = {
  _type: "customUrl"
  type?: "internal" | "external"
  openInNewTab?: boolean
  external?: string
  href?: string
  internal?: {
    _ref: string
    _type: "reference"
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: "page"
  }
}

export type SanityImageCrop = {
  _type: "sanity.imageCrop"
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot"
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: "sanity.imageAsset"
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData"
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata"
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Slug = {
  _type: "slug"
  current?: string
  source?: string
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | EmbedBlock
  | FeatureBoxBlock
  | ContactListBlock
  | RichTextBlock
  | HeroBlock
  | PageBuilder
  | RichText
  | Navbar
  | Footer
  | Settings
  | HomePage
  | Page
  | CustomUrl
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: sanity/lib/queries.ts
// Variable: queryHomePageData
// Query: *[_type == "homePage" && _id == "homePage"][0]{    ...,    _id,    _type,    "slug": slug.current,    richText,      pageBuilder[]{    ...,    _type,      _type == "richTextBlock" => {    ...,      richText[]{    ...,      markDefs[]{    ...,      ...customLink{    openInNewTab,    "href": select(      type == "internal" => internal->slug.current,      type == "external" => external,      "#"    ),  }  }  },  },      _type == "contactListBlock" => {    ...,    title,  },      _type == "heroBlock" => {    ...,      image{    ...,    "alt": coalesce(asset->altText, asset->originalFilename, "Image-Broken"),    "blurData": asset->metadata.lqip,    "dominantColor": asset->metadata.palette.dominant.background,  },  },      _type == "embedBlock" => {    title,    url,  },      _type == "featureBoxBlock" => {    ...,    "features": features[]->  {    title,    "slug": slug.current,    "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",  }  },  }  }
export type QueryHomePageDataResult = {
  _id: string
  _type: "homePage"
  _createdAt: string
  _updatedAt: string
  _rev: string
  richText: RichText | null
  slug: string | null
  pageBuilder: Array<
    | {
        _key: string
        _type: "contactListBlock"
        title: string | null
      }
    | {
        _key: string
        _type: "embedBlock"
        title: string | null
        url: string | null
      }
    | {
        _key: string
        _type: "featureBoxBlock"
        features: Array<{
          title: string | null
          slug: string | null
          image: string | null
        }> | null
      }
    | {
        _key: string
        _type: "heroBlock"
        image: {
          asset?: {
            _ref: string
            _type: "reference"
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
          }
          hotspot?: SanityImageHotspot
          crop?: SanityImageCrop
          _type: "image"
          alt: string | "Image-Broken"
          blurData: string | null
          dominantColor: string | null
        } | null
      }
    | {
        _key: string
        _type: "richTextBlock"
        richText: Array<
          | {
              children?: Array<{
                marks?: Array<string>
                text?: string
                _type: "span"
                _key: string
              }>
              style?: "h1" | "h2" | "h3" | "normal"
              listItem?: "bullet" | "number"
              markDefs: Array<
                | {
                    customLink?: CustomUrl
                    _type: "customLink"
                    _key: string
                    openInNewTab: boolean | null
                    href: string | "#" | null
                  }
                | {
                    customLink?: CustomUrl
                    _type: "customLink"
                    _key: string
                  }
              > | null
              level?: number
              _type: "block"
              _key: string
            }
          | {
              asset?: {
                _ref: string
                _type: "reference"
                _weak?: boolean
                [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              caption?: string
              _type: "image"
              _key: string
              markDefs: null
            }
        > | null
      }
  > | null
  seoTitle?: string
  seoDescription?: string
  seoImage?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  ogTitle?: string
  ogDescription?: string
} | null
// Variable: querySlugPageData
// Query: *[_type == "page" && slug.current == $slug][0]{    ...,    "slug": slug.current,    "children": children[]->  {    title,    "slug": slug.current,    "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",  },      pageBuilder[]{    ...,    _type,      _type == "richTextBlock" => {    ...,      richText[]{    ...,      markDefs[]{    ...,      ...customLink{    openInNewTab,    "href": select(      type == "internal" => internal->slug.current,      type == "external" => external,      "#"    ),  }  }  },  },      _type == "contactListBlock" => {    ...,    title,  },      _type == "heroBlock" => {    ...,      image{    ...,    "alt": coalesce(asset->altText, asset->originalFilename, "Image-Broken"),    "blurData": asset->metadata.lqip,    "dominantColor": asset->metadata.palette.dominant.background,  },  },      _type == "embedBlock" => {    title,    url,  },      _type == "featureBoxBlock" => {    ...,    "features": features[]->  {    title,    "slug": slug.current,    "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",  }  },  }  }
export type QuerySlugPageDataResult = {
  _id: string
  _type: "page"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  description?: string
  slug: string | null
  image?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  children: Array<{
    title: string | null
    slug: string | null
    image: string | null
  }> | null
  pageBuilder: Array<
    | {
        _key: string
        _type: "contactListBlock"
        title: string | null
      }
    | {
        _key: string
        _type: "embedBlock"
        title: string | null
        url: string | null
      }
    | {
        _key: string
        _type: "featureBoxBlock"
        features: Array<{
          title: string | null
          slug: string | null
          image: string | null
        }> | null
      }
    | {
        _key: string
        _type: "heroBlock"
        image: {
          asset?: {
            _ref: string
            _type: "reference"
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
          }
          hotspot?: SanityImageHotspot
          crop?: SanityImageCrop
          _type: "image"
          alt: string | "Image-Broken"
          blurData: string | null
          dominantColor: string | null
        } | null
      }
    | {
        _key: string
        _type: "richTextBlock"
        richText: Array<
          | {
              children?: Array<{
                marks?: Array<string>
                text?: string
                _type: "span"
                _key: string
              }>
              style?: "h1" | "h2" | "h3" | "normal"
              listItem?: "bullet" | "number"
              markDefs: Array<
                | {
                    customLink?: CustomUrl
                    _type: "customLink"
                    _key: string
                    openInNewTab: boolean | null
                    href: string | "#" | null
                  }
                | {
                    customLink?: CustomUrl
                    _type: "customLink"
                    _key: string
                  }
              > | null
              level?: number
              _type: "block"
              _key: string
            }
          | {
              asset?: {
                _ref: string
                _type: "reference"
                _weak?: boolean
                [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              caption?: string
              _type: "image"
              _key: string
              markDefs: null
            }
        > | null
      }
  > | null
  seoTitle?: string
  seoDescription?: string
  seoImage?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  seoNoIndex?: boolean
  ogTitle?: string
  ogDescription?: string
} | null
// Variable: querySlugPagePaths
// Query: *[_type == "page" && defined(slug.current)].slug.current
export type QuerySlugPagePathsResult = Array<string | null>
// Variable: queryHomePageOGData
// Query: *[_type == "homePage" && _id == $id][0]{      _id,  _type,  "title": select(    defined(ogTitle) => ogTitle,    defined(seoTitle) => seoTitle,    title  ),  "description": select(    defined(ogDescription) => ogDescription,    defined(seoDescription) => seoDescription,    description  ),  "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",  "dominantColor": image.asset->metadata.palette.dominant.background,  "seoImage": seoImage.asset->url + "?w=1200&h=630&dpr=2&fit=max",   "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max&q=100",  "date": coalesce(date, _createdAt)  }
export type QueryHomePageOGDataResult = {
  _id: string
  _type: "homePage"
  title: string | null
  description: string | null
  image: null
  dominantColor: null
  seoImage: string | null
  logo: string | null
  date: string
} | null
// Variable: querySlugPageOGData
// Query: *[_type == "page" && _id == $id][0]{      _id,  _type,  "title": select(    defined(ogTitle) => ogTitle,    defined(seoTitle) => seoTitle,    title  ),  "description": select(    defined(ogDescription) => ogDescription,    defined(seoDescription) => seoDescription,    description  ),  "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",  "dominantColor": image.asset->metadata.palette.dominant.background,  "seoImage": seoImage.asset->url + "?w=1200&h=630&dpr=2&fit=max",   "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max&q=100",  "date": coalesce(date, _createdAt)  }
export type QuerySlugPageOGDataResult = {
  _id: string
  _type: "page"
  title: string | null
  description: string | null
  image: string | null
  dominantColor: string | null
  seoImage: string | null
  logo: string | null
  date: string
} | null
// Variable: queryGenericPageOGData
// Query: *[ defined(slug.current) && _id == $id][0]{      _id,  _type,  "title": select(    defined(ogTitle) => ogTitle,    defined(seoTitle) => seoTitle,    title  ),  "description": select(    defined(ogDescription) => ogDescription,    defined(seoDescription) => seoDescription,    description  ),  "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",  "dominantColor": image.asset->metadata.palette.dominant.background,  "seoImage": seoImage.asset->url + "?w=1200&h=630&dpr=2&fit=max",   "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max&q=100",  "date": coalesce(date, _createdAt)  }
export type QueryGenericPageOGDataResult =
  | {
      _id: string
      _type: "homePage"
      title: string | null
      description: string | null
      image: null
      dominantColor: null
      seoImage: string | null
      logo: string | null
      date: string
    }
  | {
      _id: string
      _type: "page"
      title: string | null
      description: string | null
      image: string | null
      dominantColor: string | null
      seoImage: string | null
      logo: string | null
      date: string
    }
  | null
// Variable: queryFooterData
// Query: *[_type == "footer" && _id == "footer"][0]{    _id,    subtitle,    columns[]{      _key,      title,      links[]{        _key,        name,        "openInNewTab": url.openInNewTab,        "href": select(          url.type == "internal" => url.internal->slug.current,          url.type == "external" => url.external,          url.href        ),      }    },    "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max",    "siteTitle": *[_type == "settings"][0].siteTitle,    "socialLinks": *[_type == "settings"][0].socialLinks,  }
export type QueryFooterDataResult = {
  _id: string
  subtitle: string | null
  columns: Array<{
    _key: string
    title: string | null
    links: Array<{
      _key: string
      name: string | null
      openInNewTab: boolean | null
      href: string | null
    }> | null
  }> | null
  logo: string | null
  siteTitle: string | null
  socialLinks: {
    linkedin?: string
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
  } | null
} | null
// Variable: queryNavbarData
// Query: *[_type == "navbar" && _id == "navbar"][0]{    _id,    columns[]{      _key,      _type == "navbarColumn" => {        "type": "column",        title,        links[]{          _key,          name,          icon,          description,          "openInNewTab": url.openInNewTab,          "href": select(            url.type == "internal" => url.internal->slug.current,            url.type == "external" => url.external,            url.href          )        }      },      _type == "navbarLink" => {        "type": "link",        name,        description,        "openInNewTab": url.openInNewTab,        "href": select(          url.type == "internal" => url.internal->slug.current,          url.type == "external" => url.external,          url.href        )      }    },    "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max",    "siteTitle": *[_type == "settings"][0].siteTitle,  }
export type QueryNavbarDataResult = {
  _id: string
  columns: Array<
    | {
        _key: string
        type: "link"
        name: string | null
        description: null
        openInNewTab: boolean | null
        href: string | null
      }
    | {
        _key: string
        type: "column"
        title: string | null
        links: Array<{
          _key: string
          name: string | null
          icon: null
          description: string | null
          openInNewTab: boolean | null
          href: string | null
        }> | null
      }
  > | null
  logo: string | null
  siteTitle: string | null
} | null
// Variable: querySitemapData
// Query: {  "slugPages": *[_type == "page" && defined(slug.current)]{    "slug": slug.current,    "lastModified": _updatedAt  },}
export type QuerySitemapDataResult = {
  slugPages: Array<{
    slug: string | null
    lastModified: string
  }>
}

declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type == "homePage" && _id == "homePage"][0]{\n    ...,\n    _id,\n    _type,\n    "slug": slug.current,\n    richText,\n    \n  pageBuilder[]{\n    ...,\n    _type,\n    \n  _type == "richTextBlock" => {\n    ...,\n    \n  richText[]{\n    ...,\n    \n  markDefs[]{\n    ...,\n    \n  ...customLink{\n    openInNewTab,\n    "href": select(\n      type == "internal" => internal->slug.current,\n      type == "external" => external,\n      "#"\n    ),\n  }\n\n  }\n\n  }\n,\n  }\n,\n    \n  _type == "contactListBlock" => {\n    ...,\n    title,\n  }\n,\n    \n  _type == "heroBlock" => {\n    ...,\n    \n  image{\n    ...,\n    "alt": coalesce(asset->altText, asset->originalFilename, "Image-Broken"),\n    "blurData": asset->metadata.lqip,\n    "dominantColor": asset->metadata.palette.dominant.background,\n  }\n,\n  }\n,\n    \n  _type == "embedBlock" => {\n    title,\n    url,\n  }\n,\n    \n  _type == "featureBoxBlock" => {\n    ...,\n    "features": features[]->\n  {\n    title,\n    "slug": slug.current,\n    "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",\n  }\n\n  }\n,\n  }\n\n  }': QueryHomePageDataResult
    '\n  *[_type == "page" && slug.current == $slug][0]{\n    ...,\n    "slug": slug.current,\n    "children": children[]->\n  {\n    title,\n    "slug": slug.current,\n    "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",\n  }\n,\n    \n  pageBuilder[]{\n    ...,\n    _type,\n    \n  _type == "richTextBlock" => {\n    ...,\n    \n  richText[]{\n    ...,\n    \n  markDefs[]{\n    ...,\n    \n  ...customLink{\n    openInNewTab,\n    "href": select(\n      type == "internal" => internal->slug.current,\n      type == "external" => external,\n      "#"\n    ),\n  }\n\n  }\n\n  }\n,\n  }\n,\n    \n  _type == "contactListBlock" => {\n    ...,\n    title,\n  }\n,\n    \n  _type == "heroBlock" => {\n    ...,\n    \n  image{\n    ...,\n    "alt": coalesce(asset->altText, asset->originalFilename, "Image-Broken"),\n    "blurData": asset->metadata.lqip,\n    "dominantColor": asset->metadata.palette.dominant.background,\n  }\n,\n  }\n,\n    \n  _type == "embedBlock" => {\n    title,\n    url,\n  }\n,\n    \n  _type == "featureBoxBlock" => {\n    ...,\n    "features": features[]->\n  {\n    title,\n    "slug": slug.current,\n    "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",\n  }\n\n  }\n,\n  }\n\n  }\n  ': QuerySlugPageDataResult
    '\n  *[_type == "page" && defined(slug.current)].slug.current\n': QuerySlugPagePathsResult
    '\n  *[_type == "homePage" && _id == $id][0]{\n    \n  _id,\n  _type,\n  "title": select(\n    defined(ogTitle) => ogTitle,\n    defined(seoTitle) => seoTitle,\n    title\n  ),\n  "description": select(\n    defined(ogDescription) => ogDescription,\n    defined(seoDescription) => seoDescription,\n    description\n  ),\n  "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",\n  "dominantColor": image.asset->metadata.palette.dominant.background,\n  "seoImage": seoImage.asset->url + "?w=1200&h=630&dpr=2&fit=max", \n  "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max&q=100",\n  "date": coalesce(date, _createdAt)\n\n  }\n  ': QueryHomePageOGDataResult
    '\n  *[_type == "page" && _id == $id][0]{\n    \n  _id,\n  _type,\n  "title": select(\n    defined(ogTitle) => ogTitle,\n    defined(seoTitle) => seoTitle,\n    title\n  ),\n  "description": select(\n    defined(ogDescription) => ogDescription,\n    defined(seoDescription) => seoDescription,\n    description\n  ),\n  "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",\n  "dominantColor": image.asset->metadata.palette.dominant.background,\n  "seoImage": seoImage.asset->url + "?w=1200&h=630&dpr=2&fit=max", \n  "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max&q=100",\n  "date": coalesce(date, _createdAt)\n\n  }\n': QuerySlugPageOGDataResult
    '\n  *[ defined(slug.current) && _id == $id][0]{\n    \n  _id,\n  _type,\n  "title": select(\n    defined(ogTitle) => ogTitle,\n    defined(seoTitle) => seoTitle,\n    title\n  ),\n  "description": select(\n    defined(ogDescription) => ogDescription,\n    defined(seoDescription) => seoDescription,\n    description\n  ),\n  "image": image.asset->url + "?w=566&h=566&dpr=2&fit=max",\n  "dominantColor": image.asset->metadata.palette.dominant.background,\n  "seoImage": seoImage.asset->url + "?w=1200&h=630&dpr=2&fit=max", \n  "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max&q=100",\n  "date": coalesce(date, _createdAt)\n\n  }\n': QueryGenericPageOGDataResult
    '\n  *[_type == "footer" && _id == "footer"][0]{\n    _id,\n    subtitle,\n    columns[]{\n      _key,\n      title,\n      links[]{\n        _key,\n        name,\n        "openInNewTab": url.openInNewTab,\n        "href": select(\n          url.type == "internal" => url.internal->slug.current,\n          url.type == "external" => url.external,\n          url.href\n        ),\n      }\n    },\n    "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max",\n    "siteTitle": *[_type == "settings"][0].siteTitle,\n    "socialLinks": *[_type == "settings"][0].socialLinks,\n  }\n': QueryFooterDataResult
    '\n  *[_type == "navbar" && _id == "navbar"][0]{\n    _id,\n    columns[]{\n      _key,\n      _type == "navbarColumn" => {\n        "type": "column",\n        title,\n        links[]{\n          _key,\n          name,\n          icon,\n          description,\n          "openInNewTab": url.openInNewTab,\n          "href": select(\n            url.type == "internal" => url.internal->slug.current,\n            url.type == "external" => url.external,\n            url.href\n          )\n        }\n      },\n      _type == "navbarLink" => {\n        "type": "link",\n        name,\n        description,\n        "openInNewTab": url.openInNewTab,\n        "href": select(\n          url.type == "internal" => url.internal->slug.current,\n          url.type == "external" => url.external,\n          url.href\n        )\n      }\n    },\n    "logo": *[_type == "settings"][0].logo.asset->url + "?w=80&h=40&dpr=3&fit=max",\n    "siteTitle": *[_type == "settings"][0].siteTitle,\n  }\n': QueryNavbarDataResult
    '{\n  "slugPages": *[_type == "page" && defined(slug.current)]{\n    "slug": slug.current,\n    "lastModified": _updatedAt\n  },\n}': QuerySitemapDataResult
  }
}
