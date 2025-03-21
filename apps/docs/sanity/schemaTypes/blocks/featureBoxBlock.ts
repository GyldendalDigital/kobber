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
      firstFeature: "features.0",
    },
    prepare: ({ features, firstFeature }) => {
      if (!features?.length) {
        return {
          title: "Feature box",
        }
      }

      return {
        title: `Feature box: ${firstFeature.title}`,
        subtitle: `Contains ${features.length} features`,
        media: firstFeature.image,
      }
    },
  },
})
