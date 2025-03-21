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
      firstFeatureImage: "features.0.image",
    },
    prepare: ({ features, firstFeatureTitle, firstFeatureImage }) => {
      const otherFeatureNames = Object.values(features)
        .slice(1)
        // @ts-expect-error: ignore ts(7006)
        .map((feature) => feature.title)
        .join(", ")
      return {
        title: `Feature box: ${firstFeatureTitle ?? "Empty"}`,
        subtitle: otherFeatureNames ? `+ ${otherFeatureNames}` : undefined,
        media: firstFeatureImage,
      }
    },
  },
})
