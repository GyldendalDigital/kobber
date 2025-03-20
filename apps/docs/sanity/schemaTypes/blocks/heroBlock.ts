import { Star } from "lucide-react"
import { defineField, defineType } from "sanity"

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero",
  icon: Star,
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      image: "image",
    },
    prepare: ({ image }) => ({
      title: "Hero",
    }),
  },
})
