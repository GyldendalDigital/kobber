"use client"

import type { ComponentType } from "react"
import { dataset, projectId, studioUrl } from "@/sanity/env"
import type { QueryHomePageDataResult } from "@/sanity/sanity.types"
import { useOptimistic } from "@sanity/visual-editing/react"
import { createDataAttribute, type SanityDocument } from "next-sanity"
import type { PagebuilderType } from "./page-builder.types"
import { HeroBlock } from "./sections/hero"

type PageBlock = NonNullable<NonNullable<QueryHomePageDataResult>["pageBuilder"]>[number]

export type PageBuilderProps = {
  pageBuilder: PageBlock[]
  id: string
  type: string
}

type PageData = {
  _id: string
  _type: string
  pageBuilder?: PageBlock[]
}

const BLOCK_COMPONENTS = {
  hero: HeroBlock,
} as const

type BlockType = keyof typeof BLOCK_COMPONENTS

export function PageBuilder({ pageBuilder: initialPageBuilder = [], id, type }: PageBuilderProps) {
  const pageBuilder = useOptimistic<PageBlock[], SanityDocument<PageData>>(
    initialPageBuilder,
    (currentPageBuilder, action) => {
      if (action.id === id && action.document.pageBuilder) {
        return action.document.pageBuilder
      }

      return currentPageBuilder
    }
  )

  return (
    <main
      className="mx-auto my-16 flex max-w-7xl flex-col gap-16"
      data-sanity={createDataAttribute({
        id: id,
        baseUrl: studioUrl,
        projectId: projectId,
        dataset: dataset,
        type: type,
        path: "pageBuilder",
      }).toString()}
    >
      {pageBuilder.map((block) => {
        const Component = BLOCK_COMPONENTS[block._type] as ComponentType<PagebuilderType<BlockType>>

        if (!Component) {
          return (
            <div
              key={`${block._type}-${block._key}`}
              className="flex items-center justify-center rounded-lg bg-muted p-8 text-center text-muted-foreground"
            >
              Component not found for block type: <code>{block._type}</code>
            </div>
          )
        }

        return (
          <div
            key={`${block._type}-${block._key}`}
            data-sanity={createDataAttribute({
              id: id,
              baseUrl: studioUrl,
              projectId: projectId,
              dataset: dataset,
              type: type,
              path: `pageBuilder[_key=="${block._key}"]`,
            }).toString()}
          >
            <Component {...block} />
          </div>
        )
      })}
    </main>
  )
}
