import { HomeIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"
import { GROUPS } from "../../utils/constant"
import { ogFields } from "../../utils/og-fields"
import { seoFields } from "../../utils/seo-fields"
import { pageBuilderField } from "../common"

export const homePage = defineType({
  name: "homePage",
  type: "document",
  title: "Home Page",
  icon: HomeIcon,
  groups: GROUPS,
  fields: [
    pageBuilderField,
    defineField({
      name: "slug",
      type: "slug",
      initialValue: { current: "/" },
      hidden: true,
    }),
    ...seoFields.filter((field) => !["seoNoIndex", "seoHideFromLists"].includes(field.name)),
    ...ogFields,
  ],
  preview: {
    prepare: () => ({
      title: "Kobber home page",
      media: HomeIcon,
    }),
  },
})
