import { ExternalLink } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"

export const linkListBlock = defineType({
  name: "linkListBlock",
  type: "object",
  icon: ExternalLink,
  title: "Link list",
  fields: [
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            // defineField({
            //   name: "url",
            //   title: "URL",
            //   type: "url",
            // }),
            defineField({
              name: "external",
              title: "External",
              type: "boolean",
            }),
          ],
        }),
      ],
    }),
  ],
  // preview: {
  //   select: {
  //     features: "links",
  //     firstFeatureTitle: "links.0.title",
  //     firstFeatureImage: "links.0.url",
  //   },
  //   prepare: ({ features, firstFeatureTitle, firstFeatureImage }) => {
  //     console.log(features)
  //     const otherFeatureNames = Object.values(features)
  //       .slice(1)
  //       // @ts-expect-error: ignore ts(7006)
  //       .map((feature) => feature.title)
  //       .join(", ")
  //     return {
  //       title: `Feature box: ${firstFeatureTitle ?? "Empty"}`,
  //       subtitle: otherFeatureNames ? `+ ${otherFeatureNames}` : undefined,
  //       media: firstFeatureImage,
  //     }
  //   },
  // },
})
