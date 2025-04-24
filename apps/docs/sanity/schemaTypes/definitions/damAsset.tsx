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
      title: "name",
      // media: "previewUrl", // createElement tag name error
    },
  },
})
