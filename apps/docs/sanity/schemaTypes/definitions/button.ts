import { capitalize, createRadioListLayout } from "../../utils/helper"
import { Command } from "lucide-react"
import { defineField, defineType } from "sanity"

const buttonVariants = ["default", "secondary", "outline", "link"]

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  icon: Command,
  fields: [
    defineField({
      name: "variant",
      type: "string",
      initialValue: () => "default",
      options: createRadioListLayout(buttonVariants, {
        direction: "horizontal",
      }),
    }),
    defineField({
      name: "text",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "customUrl",
    }),
  ],
  preview: {
    select: {
      title: "text",
      variant: "variant",
      externalUrl: "url.external",
      urlType: "url.type",
      internalUrl: "url.internal.slug.current",
      openInNewTab: "url.openInNewTab",
    },
    prepare: ({ title, variant, externalUrl, urlType, internalUrl, openInNewTab }) => {
      const url = urlType === "external" ? externalUrl : internalUrl
      const newTabIndicator = openInNewTab ? " ↗" : ""
      const truncatedUrl = url?.length > 30 ? `${url.substring(0, 30)}...` : url

      return {
        title: title || "Untitled Button",
        subtitle: `${capitalize(variant ?? "default")} • ${truncatedUrl}${newTabIndicator}`,
      }
    },
  },
})
