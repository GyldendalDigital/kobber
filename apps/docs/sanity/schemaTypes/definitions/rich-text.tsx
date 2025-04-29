import {
  CheckmarkCircleIcon,
  CloseCircleIcon,
  CodeBlockIcon,
  ImageIcon,
  LinkIcon,
} from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

const richTextMembers = [
  defineArrayMember({
    name: "block",
    type: "block",
    styles: [
      { title: "H1", value: "h1" },
      { title: "H2", value: "h2" },
      { title: "Ingress", value: "h3" },
      { title: "50% bredde", value: "inline" },
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
        {
          title: "Check",
          value: "iconPositive",
          icon: CheckmarkCircleIcon,
          component: (props) => {
            const showIcon = props.children?.props?.text?.marks?.length === 1
            return showIcon ? (
              <>
                <CheckmarkCircleIcon />
                &nbsp; {props.children}
              </>
            ) : (
              props.children
            )
          },
        },
        {
          title: "Cross",
          value: "iconNegative",
          icon: CloseCircleIcon,
          component: (props) => {
            const showIcon = props.children?.props?.text?.marks?.length === 1
            return showIcon ? (
              <>
                <CloseCircleIcon />
                &nbsp; {props.children}
              </>
            ) : (
              props.children
            )
          },
        },
      ],
    },
  }),
  defineArrayMember({
    name: "damAsset",
    type: "damAsset",
    title: "Image",
    icon: ImageIcon,
  }),
  defineArrayMember({
    name: "embedBlock",
    type: "embedBlock",
    title: "Embed",
    icon: CodeBlockIcon,
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
