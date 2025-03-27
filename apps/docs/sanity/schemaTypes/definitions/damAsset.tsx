import { Image } from "lucide-react"
import { defineField, defineType } from "sanity"
import { DamAssetInput } from "../../components/dam/DamAssetInput"

export const damAsset = defineType({
  name: "damAsset",
  title: "DAM asset",
  icon: Image,
  type: "object",
  fields: [
    defineField({
      name: "assetId",
      title: "Asset ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "previewUrl",
      title: "Preview URL",
      type: "string",
    }),
  ],
  components: {
    input: DamAssetInput,
  },
  preview: {
    select: {
      assetId: "assetId",
      title: "name",
      previewUrl: "previewUrl",
    },
    prepare: ({ assetId, title, previewUrl }) => ({
      title: title || assetId,
      media: <img src={previewUrl} alt="" />,
    }),
  },
})
