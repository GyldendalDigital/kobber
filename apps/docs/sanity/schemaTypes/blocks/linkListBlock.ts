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
    },
    prepare: ({ links }) => {
      const linkNames = Object.values(links)
        // @ts-expect-error: ignore ts(7006)
        .map((link) => link.title)
      return {
        title: `Link list: ${linkNames[0] ?? "Empty"}`,
        subtitle: linkNames[1] ? `+ ${linkNames.length - 1} links` : undefined,
      }
    },
  },
})
