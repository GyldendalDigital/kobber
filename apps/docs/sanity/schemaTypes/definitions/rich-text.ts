import { ImageIcon, LinkIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

const richTextMembers = [
  defineArrayMember({
    name: "block",
    type: "block",
    styles: [
      { title: "H1", value: "h1" },
      { title: "H2", value: "h2" },
      { title: "Ingress", value: "h3" },
    ],
    lists: [
      { title: "Numbered", value: "number" },
      { title: "Bullet", value: "bullet" },
    ],
    marks: {
      annotations: [
        {
          name: "customLink",
          type: "object",
          title: "Internal/External Link",
          icon: LinkIcon,
          fields: [
            defineField({
              name: "customLink",
              type: "customUrl",
            }),
          ],
        },
      ],
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
        { title: "Code", value: "code" },
      ],
    },
  }),
  defineArrayMember({
    name: "damAsset",
    type: "damAsset",
    title: "Image",
    icon: ImageIcon,
  }),
]

export const richText = defineType({
  name: "richText",
  type: "array",
  of: richTextMembers,
})

export const memberTypes = richTextMembers.map((member) => member.name)

type Type = NonNullable<(typeof memberTypes)[number]>

export const customRichText = (
  type: Type[],
  options?: { name?: string; title?: string; group?: string }
) => {
  const { name } = options ?? {}
  const customMembers = richTextMembers.filter(
    (member) => member.name && type.includes(member.name)
  )
  return defineField({
    ...options,
    name: name ?? "richText",
    type: "array",
    of: customMembers,
  })
}
