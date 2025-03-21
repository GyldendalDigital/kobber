import { HomeIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"
import { GROUP, GROUPS } from "../../utils/constant"
import { ogFields } from "../../utils/og-fields"
import { seoFields } from "../../utils/seo-fields"
import { pageBuilderField, richTextField } from "../common"

export const homePage = defineType({
  name: "homePage",
  type: "document",
  title: "Home Page",
  icon: HomeIcon,
  groups: GROUPS,
  fields: [
    richTextField,
    defineField({
      name: "slug",
      type: "slug",
      description:
        "The web address for your home page. Usually this is just '/' for the main page of your website.",
      group: GROUP.MAIN_CONTENT,
      validation: (Rule) => Rule.required(),
    }),
    pageBuilderField,
    ...seoFields.filter((field) => !["seoNoIndex", "seoHideFromLists"].includes(field.name)),
    ...ogFields,
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      slug: "slug.current",
    },
    prepare: ({ title, description, slug }) => ({
      title: title || "Untitled Home Page",
      media: HomeIcon,
      subtitle: slug || "Home Page",
    }),
  },
})
