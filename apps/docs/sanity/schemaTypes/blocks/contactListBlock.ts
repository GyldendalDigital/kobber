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
      title: "Hard coded contact list requires at least one field",
    }),
  ],
})
