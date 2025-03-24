import { ComposeIcon, InsertAboveIcon, SearchIcon } from "@sanity/icons"
import type { FieldGroupDefinition } from "sanity"

export const GROUP = {
  SEO: "seo",
  MAIN_CONTENT: "main-content",
  OG: "og",
}

export const GROUPS: FieldGroupDefinition[] = [
  {
    name: GROUP.MAIN_CONTENT,
    icon: ComposeIcon,
    title: "Content",
    default: true,
  },
  { name: GROUP.SEO, icon: SearchIcon, title: "SEO" },
  {
    name: GROUP.OG,
    icon: InsertAboveIcon,
    title: "Open Graph",
  },
]
