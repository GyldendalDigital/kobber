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
        // @ts-expect-error: ignore ts(7006)
        ?.filter((x) => x?.children?.find((y) => y?.text))
        // @ts-expect-error: ignore ts(7006)
        .flatMap((x) => x.children.map((y) => y.text))

      return {
        title: `Rich text: ${texts?.[0] ?? "Empty"}`,
        subtitle: texts?.[1],
      }
    },
  },
})
