import { defineArrayMember, defineField, defineType } from "sanity"
import { GROUP, GROUPS } from "../../utils/constant"
import { ogFields } from "../../utils/og-fields"
import { seoFields } from "../../utils/seo-fields"
import { pageBuilderField } from "../common"

export const blogIndex = defineType({
  name: "blogIndex",
  type: "document",
  title: "Blog Listing Page",
  description:
    "This is the main page that shows all your blog posts. You can customize how your blog listing page looks, what title it has, and which blog post you want to highlight at the top.",
  groups: GROUPS,
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "The main heading that will appear at the top of your blog listing page",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "description",
      type: "text",
      description:
        "A short summary of what visitors can find on your blog. This helps people understand what your blog is about.",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "slug",
      type: "slug",
      description:
        "The web address for your blog page (for example, '/blog' would create a page at yourdomain.com/blog)",
      group: GROUP.MAIN_CONTENT,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Blogs",
      description:
        "Choose one special blog post to highlight at the top of your blog page. This post will be displayed in a larger size to catch visitors' attention.",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            {
              type: "blog",
              options: { disableNew: true },
            },
          ],
          validation: (rule) => [rule.required()],
        }),
      ],
      validation: (rule) => [rule.max(1), rule.unique()],
      group: GROUP.MAIN_CONTENT,
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
      title: title || "Untitled Blog Index",
      subtitle: description || slug || "Blog Index",
    }),
  },
})
