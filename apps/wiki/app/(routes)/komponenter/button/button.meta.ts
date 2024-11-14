import { pageMetadata } from "@/lib/metadata.utils"
import { placeholderImageUrl } from "@/lib/utils"

export const metaComponentsButton = pageMetadata(import.meta.url, {
  title: "Button",
  image: placeholderImageUrl({}),
  description:
    "En knappkomponent brukes for å utføre en bestemt handling eller trigge en hendelse. Teksten på knappen må tydelig beskrive hva som vil skje når den trykkes på.",
})
