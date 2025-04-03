import { ImagesIcon } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"

export const featureBoxBlock = defineType({
  name: "featureBoxBlock",
  type: "object",
  icon: ImagesIcon,
  title: "Feature box",
  fields: [
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            {
              type: "page",
              options: { disableNew: true },
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      features: "features",
      firstFeatureTitle: "features.0.title",
    },
    prepare: ({ features, firstFeatureTitle }) => {
      const featureCount = Object.values(features).length

      return {
        title: `Feature box: ${firstFeatureTitle ?? "Empty"}${featureCount > 1 ? ` og ${featureCount - 1} til` : ""}`,
      }
    },
  },
})
