import { Code } from "lucide-react"
import { defineField, defineType } from "sanity"

export const embedBlock = defineType({
  name: "embedBlock",
  type: "object",
  icon: Code,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      type: "string",
      initialValue: () =>
        "https://kobber-storybook.gyldendaldigital.no/?path=/story/button--button",
    }),
    defineField({
      name: "inline",
      title: "50% bredde i rich text",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
    prepare: ({ title, url }) => ({
      title: title ?? "Untitled",
      subtitle: url?.split("/").slice(-1)[0],
    }),
  },
})
