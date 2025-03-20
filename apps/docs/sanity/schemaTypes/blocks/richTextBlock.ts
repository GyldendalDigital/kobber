import { Text } from "lucide-react"
import { defineType } from "sanity"
import { richTextField } from "../common"

export const richTextBlock = defineType({
  name: "richTextBlock",
  title: "Rich text",
  icon: Text,
  type: "object",
  fields: [richTextField],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Rich Text Block",
    }),
  },
})
