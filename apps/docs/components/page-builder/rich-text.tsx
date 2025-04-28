import { embedBlock } from "@/sanity/schemaTypes/blocks/embedBlock"
import { KobberHeading, KobberIngress } from "@gyldendal/kobber-components/react-ssr-safe"
import {
  PortableText,
  PortableTextTypeComponentProps,
  type PortableTextBlock,
  type PortableTextReactComponents,
} from "next-sanity"
import { cn } from "@/lib/utils"
import { RouterTextLink } from "../global/router-link"
import styles from "./rich-text.module.css"
import { EmbedBlock, EmbedProps } from "./sections/embed-block"

const parseChildrenToSlug = (s: PortableTextBlock["children"]) => s.map((x) => x.text).join("")

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children, value }) => {
      const slug = parseChildrenToSlug(value.children)
      return <KobberHeading id={slug}>{children}</KobberHeading>
    },
    h2: ({ children, value }) => {
      const slug = parseChildrenToSlug(value.children)
      const highlighted = value.children[0]?.marks?.includes("em")
      return (
        <KobberHeading
          id={slug}
          level="h2"
          variant={highlighted ? "display small" : "title medium"}
          font={highlighted ? "secondary" : "primary"}
        >
          {children}
        </KobberHeading>
      )
    },
    h3: ({ children, value }) => {
      const slug = parseChildrenToSlug(value.children)
      return <KobberIngress id={slug}>{children}</KobberIngress>
    },
    inline: ({ children }) => <p className="mr-[2%] inline-block w-[48%] align-top">{children}</p>,
  },
  marks: {
    code: ({ children }) => (
      <code className="rounded-md border border-white/10 bg-opacity-5 p-1 text-sm lg:whitespace-nowrap">
        {children}
      </code>
    ),
    customLink: ({ children, value }) => {
      if (!value.href || value.href === "#") {
        console.warn("🚀 link is not set", value)
        return <span className="underline decoration-dotted underline-offset-2">Link Broken</span>
      }

      return <RouterTextLink href={value.href}>{children}</RouterTextLink>
    },
  },
  types: {
    damAsset: ({ value }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={cn(styles["image"], value.inline && styles["inline"])}
        src={value.previewUrl}
        alt={value.name}
      />
      // {value.caption && <small>{value.caption}</small>}
    ),
    embedBlock: ({ value }: PortableTextTypeComponentProps<EmbedProps>) => {
      return <EmbedBlock className={cn(value.inline && styles["inline"])} {...value} />
    },
  },
  hardBreak: () => <br />,
}

export function RichText<T>({ richText }: { richText?: T | null }) {
  if (!richText) return null

  return (
    <div className={styles["rich-text"]}>
      <PortableText
        value={richText as unknown as PortableTextBlock[]}
        components={components}
        onMissingComponent={(_, { nodeType, type }) =>
          console.warn("missing component", nodeType, type)
        }
      />
    </div>
  )
}
