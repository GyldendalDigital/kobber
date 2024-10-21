import { Metadata } from "next"
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types"

export type RouteType = {
  title: string
  slug: string
  disabled?: boolean
  isComing?: boolean
  subRoutes?: RouteType[]
}

export type RouteDataType = {
  heroImage?: string
  topicTitle?: string
  title: string
  description: string
  text: string
  href: string
  hrefTitle: string
}

export type FeatureBoxType = {
  title?: null | string | TemplateString
  image?: string
  href?: string
}

export type AwardType = {
  date: Date
  title: string
}

export type SideMenuBarType = {
  groupTitle: string
  routes: RouteType[]
}

export type ColorItemType = {
  name: string
  hex: string
  rgb: string
  hasBorder?: boolean
}

export type ColorThemeType = {
  title: string
  description?: string
  colors: ColorItemType[]
}

export type TypographyItemType = {
  name: string
  weight: "Regular" | "Bold" | "Light" | "Book" | "Semi Bold"
  rem: number
  px: number
  lineHeight: number
  display: string
}

export type SizeType = "sm" | "md" | "lg"

export type InformationCardType = {
  title: string
  text?: string
}

export type TextCollectionProps = {
  heading?: string
  label?: string
  subheading?: string
  ingress?: string
  size?: SizeType
  text?: string
}

export interface PageDetails extends Metadata {
  href: string
  image?: string
  status?: "kommer" | "nyhet"
  children?: PageDetails[]
  disabled?: boolean
}

export type IllustrationType = {
  src: string
  alt?: string
  height: number
  width: number
}
