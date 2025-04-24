import { Palette } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"
import { richTextField } from "../common"

export const colorListBlock = defineType({
  name: "colorListBlock",
  type: "object",
  icon: Palette,
  title: "Color list",
  fields: [
    richTextField,
    defineField({
      name: "colors",
      title: "Colors",
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
            defineField({
              name: "hexValue",
              title: "HEX",
              type: "string",
              validation: (Rule) =>
                Rule.required().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, {
                  name: "hex",
                  invert: false,
                }),
            }),
            defineField({
              name: "rgbValue",
              title: "RGB",
              type: "string",
              validation: (Rule) =>
                Rule.regex(/^\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i, {
                  name: "rgb",
                  invert: false,
                }).custom((value) => {
                  if (value) {
                    const match = value.match(/^\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i)
                    if (match) {
                      const [, r, g, b] = match.map(Number)
                      if (r > 255 || g > 255 || b > 255) {
                        return "RGB values must be between 0 and 255"
                      }
                    }
                  }
                  return true
                }),
            }),
            defineField({
              name: "cmykValue",
              title: "CMYK",
              type: "string",
              validation: (Rule) =>
                Rule.regex(/^\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i, {
                  name: "cmyk",
                  invert: false,
                }).custom((value) => {
                  if (value) {
                    const match = value.match(
                      /^\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i
                    )
                    if (match) {
                      const [, c, m, y, k] = match.map(Number)
                      if (c > 100 || m > 100 || y > 100 || k > 100) {
                        return "CMYK values must be between 0 and 100"
                      }
                    }
                  }
                  return true
                }),
            }),
            defineField({
              name: "pmsValue",
              title: "PMS",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      richText: "richText",
      colors: "colors",
      firstColorTitle: "colors.0.title",
    },
    prepare: ({ richText, colors, firstColorTitle }) => {
      const texts = richText
        // @ts-expect-error: ignore ts(7006)
        ?.filter((x) => x?.children?.find((y) => y?.text))
        // @ts-expect-error: ignore ts(7006)
        .flatMap((x) => x.children.map((y) => y.text))

      const colorCount = Object.values(colors ?? {}).length

      return {
        title: `Color list: ${texts?.[0] ?? firstColorTitle ?? "Empty"}`,
        subtitle: `${colorCount} colors`,
      }
    },
  },
})
