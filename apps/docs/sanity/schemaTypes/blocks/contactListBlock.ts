import { Users2Icon } from "lucide-react"
import { defineField, defineType } from "sanity"

export const contactListBlock = defineType({
  name: "contactListBlock",
  title: "Contact list",
  icon: Users2Icon,
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Link Title",
      description: "The text to display for the link",
    }),
  ],
})
