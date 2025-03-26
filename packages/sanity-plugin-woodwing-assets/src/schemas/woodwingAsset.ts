import { defineField, defineType } from "sanity";

export const woodwingAsset = defineType({
  name: "woodwingAsset",
  title: "WoodWing Asset",
  type: "object",
  fields: [
    defineField({
      name: "assetId",
      title: "Asset ID",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "string",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "number",
    }),
    defineField({
      name: "previewUrl",
      title: "Preview URL",
      type: "string",
    }),
    defineField({
      name: "hotspot",
      title: "Hotspot",
      type: "object",
      fields: [
        { name: "x", type: "number", title: "X" },
        { name: "y", type: "number", title: "Y" },
      ],
    }),
    defineField({
      name: "crop",
      title: "Crop",
      type: "object",
      fields: [
        { name: "top", type: "number", title: "Top" },
        { name: "bottom", type: "number", title: "Bottom" },
        { name: "left", type: "number", title: "Left" },
        { name: "right", type: "number", title: "Right" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "previewUrl",
    },
  },
});
