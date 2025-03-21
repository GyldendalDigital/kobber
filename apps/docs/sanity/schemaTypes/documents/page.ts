import { sanityFetch } from "@/sanity/lib/live"
import { createSlug, isUnique } from "@/sanity/utils/slug"
import { DocumentIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType, SlugifierFn } from "sanity"
import { GROUP, GROUPS } from "../../utils/constant"
import { ogFields } from "../../utils/og-fields"
import { seoFields } from "../../utils/seo-fields"
import { pageBuilderField } from "../common"

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  description:
    "Create a new page for your website, like an 'About Us' or 'Contact' page. Each page has its own web address and content that you can customize.",
  groups: GROUPS,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "The main heading that appears at the top of your page and in browser tabs",
      group: GROUP.MAIN_CONTENT,
      validation: (Rule) => Rule.required().error("A page title is required"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL",
      description:
        "The web address for this page (for example, '/about-us' would create a page at yourdomain.com/about-us)",
      group: GROUP.MAIN_CONTENT,
      options: {
        source: "title",
        slugify: createSlug,
        isUnique,
      },
      validation: (Rule) => Rule.required().error("A URL slug is required for the page"),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description:
        "A main picture for this page that can be used when sharing on social media or in search results",
      group: GROUP.MAIN_CONTENT,
      options: {
        hotspot: true,
      },
    }),
    pageBuilderField,

    defineField({
      name: "children",
      title: "Sub pages",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            {
              type: "page",
              options: { disableNew: true },
            },
          ],
        }),
      ],
      group: GROUP.MAIN_CONTENT,
    }),
    
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description:
        "A brief summary of what this page is about. This text helps search engines understand your page and may appear in search results.",
      rows: 3,
      group: GROUP.SEO,
      validation: (rule) => [
        rule
          .min(140)
          .warning(
            "The meta description should be at least 140 characters for optimal SEO visibility in search results"
          ),
        rule
          .max(160)
          .warning(
            "The meta description should not exceed 160 characters as it will be truncated in search results"
          ),
      ],
    }),
    ...seoFields.filter((field) => field.name !== "seoHideFromLists"),
    ...ogFields,
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      media: "image",
      isPrivate: "seoNoIndex",
      hasPageBuilder: "pageBuilder",
    },
    prepare: ({ title, slug, media, isPrivate, hasPageBuilder }) => {
      //TODO:
      const statusEmoji = isPrivate ? "🔒" : "🌎"
      const builderEmoji = hasPageBuilder?.length ? `🧱 ${hasPageBuilder.length}` : "🏗️ 0"

      return {
        title: `${title || "Untitled Page"}`,
        subtitle: `${statusEmoji} ${builderEmoji} | 🔗 ${slug || "no-slug"}`,
        media,
      }
    },
  },
})
