import { Code } from "lucide-react"
import { defineField, defineType } from "sanity"

export const storybookEmbedBlock = defineType({
  name: "storybookEmbedBlock",
  type: "object",
  icon: Code,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "The large text that is the primary focus of the block",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "object",
      description: "Optional link for additional content or actions",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Link Title",
          description: "The text to display for the link",
        }),
        defineField({
          name: "description",
          type: "string",
          title: "Link Description",
          description: "A brief description of where the link leads to",
        }),
        defineField({
          name: "url",
          type: "customUrl",
          title: "URL",
          description: "The destination URL for the link",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title ?? "Untitled",
    }),
  },
})
