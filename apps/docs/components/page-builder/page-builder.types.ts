import type { QueryHomePageDataResult } from "@/sanity/sanity.types"

export type PageBuilderBlockTypes = NonNullable<
  NonNullable<QueryHomePageDataResult>["pageBuilder"]
>[number]["_type"]

export type PagebuilderType<T extends PageBuilderBlockTypes> = Extract<
  NonNullable<NonNullable<QueryHomePageDataResult>["pageBuilder"]>[number],
  { _type: T }
>

export type SanityButtonProps = NonNullable<NonNullable<PagebuilderType<"hero">>["buttons"]>[number]

export type SanityImageProps = NonNullable<NonNullable<PagebuilderType<"hero">>["image"]>

export type SanityRichTextProps = NonNullable<NonNullable<PagebuilderType<"hero">>["richText"]>

export type SanityRichTextBlock = Extract<
  NonNullable<NonNullable<SanityRichTextProps>[number]>,
  { _type: "block" }
>
