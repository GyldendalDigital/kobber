import { pageMetadata } from "@/lib/metadata.utils"
import { damUrl } from "../../../../../lib/damImageLoader"

export const metaCollections = pageMetadata(import.meta.url, {
  title: "Kolleksjoner",
  image: damUrl("0A-vmG2Cqn-8K7R7oafkcV", ".svg"),
  description: "Designtokens oraganiseres i desgn tokens",
})
