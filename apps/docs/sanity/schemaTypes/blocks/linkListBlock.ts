import { ExternalLink } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"

export const linkListBlock = defineType({
  name: "linkListBlock",
  type: "object",
  icon: ExternalLink,
  title: "Link list",
  fields: [
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
            defineField({
              name: "external",
              title: "External",
              type: "boolean",
              initialValue: true,
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      links: "links",
      firstLinkTitle: "links.0.title",
    },
    prepare: ({ links, firstLinkTitle }) => {
      const linkCount = Object.values(links).length
      return {
        title: `Link list: ${firstLinkTitle ?? "Empty"}${linkCount > 1 ? ` og ${linkCount - 1} til` : ""}`,
      }
    },
  },
})
