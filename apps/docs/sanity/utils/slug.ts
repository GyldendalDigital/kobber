import { defineField, FieldDefinition, SlugifierFn, SlugValidationContext } from "sanity"
import slugify from "slugify"
import { apiVersion } from "../env"
import type { PathnameParams } from "./types"

export function defineSlug(schema: PathnameParams = { name: "slug" }): FieldDefinition<"slug"> {
  const slugOptions = schema?.options

  return defineField({
    ...schema,
    name: schema.name ?? "slug",
    title: schema?.title ?? "URL",
    type: "slug",
    components: {
      ...schema.components,
      // field: schema.components?.field ?? PathnameFieldComponent,
    },
    options: {
      ...(slugOptions ?? {}),
      isUnique: slugOptions?.isUnique ?? isUnique,
    },
  })
}

export async function isUnique(slug: string, context: SlugValidationContext): Promise<boolean> {
  const { document, getClient } = context
  const client = getClient({ apiVersion })
  const id = document?._id.replace(/^drafts\./, "")
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  }
  const query = "*[!(_id in [$draft, $published]) && slug.current == $slug]"
  const result = await client.fetch(query, params)
  console.log("🚀 ~ isUnique:", result.length === 0)
  return result.length === 0
}

export const getDocTypePrefix = (type: string) => {
  if (["page"].includes(type)) return ""
  return type
}

const slugMapper = {
  homePage: "/",
} as Record<string, string>

export const createSlug: SlugifierFn = async (input, _, { getClient, parent }) => {
  const client = getClient({ apiVersion })

  const { _type, _id } = parent as {
    _type: string
    _id: string
  }

  if (slugMapper[_type]) return slugMapper[_type]

  const prefix = getDocTypePrefix(_type)

  const slug = slugify(input, {
    lower: true,
    remove: /[^a-zA-Z0-9 ]/g,
  })

  const parentQuery = "*[ references($id) ][0].slug.current"

  const parentQueryParams = {
    id: _id?.replace("drafts.", ""),
  }

  const parentSlug = await client.fetch(parentQuery, parentQueryParams)

  return `${parentSlug ?? ""}/${[prefix, slug].filter(Boolean).join("/")}`
}
