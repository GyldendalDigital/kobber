import { PanelTop } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"

export const navbar = defineType({
  name: "navbar",
  type: "document",
  icon: PanelTop,
  fields: [
    defineField({
      name: "children",
      title: "Navigation items",
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
    prepare: () => ({
      title: "Navbar",
    }),
  },
})
