import { Star } from "lucide-react"
import { defineField, defineType } from "sanity"

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero image",
  icon: Star,
  type: "object",
  fields: [
    defineField({
      name: "damAsset",
      type: "damAsset",
      title: "Image",
    }),
  ],
  preview: {
    select: {
      damAsset: "damAsset",
    },
    prepare: ({ damAsset }) => ({
      title: "Hero image",
      image: damAsset?.previewUrl,
    }),
  },
})
