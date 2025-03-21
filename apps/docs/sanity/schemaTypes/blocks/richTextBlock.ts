import { Text } from "lucide-react"
import { defineType } from "sanity"
import { richTextField } from "../common"

export const richTextBlock = defineType({
  name: "richTextBlock",
  title: "Rich text",
  icon: Text,
  type: "object",
  fields: [richTextField],
  preview: {
    select: {
      richText: "richText",
    },
    prepare: ({ richText }) => {
      const texts = richText
        ?.filter((x) => x?.children?.find((y) => y?.text))
        .flatMap((x) => x.children.map((y) => y.text))

      if (!texts?.length) {
        return {
          title: "Rich text",
        }
      }

      return {
        title: `Rich text: ${texts[0]}`,
        subtitle: texts[1],
      }
    },
  },
})
