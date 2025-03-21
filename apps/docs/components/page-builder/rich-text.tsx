import Link from "next/link"
import { KobberHeading, KobberIngress } from "@gyldendal/kobber-components/react-ssr-safe"
import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from "next-sanity"
import { SanityImage } from "./sanity-image"

const parseChildrenToSlug = (s: PortableTextBlock["children"]) => s.map((x) => x.text).join("")

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children, value }) => {
      const slug = parseChildrenToSlug(value.children)
      return <KobberHeading id={slug}>{children}</KobberHeading>
    },
    h2: ({ children, value }) => {
      const slug = parseChildrenToSlug(value.children)
      return (
        <KobberHeading id={slug} level="h2" variant="title medium">
          {children}
        </KobberHeading>
      )
    },
    h3: ({ children, value }) => {
      const slug = parseChildrenToSlug(value.children)
      return <KobberIngress id={slug}>{children}</KobberIngress>
    },
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
      return (
        <Link
          className="underline decoration-dotted underline-offset-2"
          href={value.href}
          prefetch={false}
          aria-label={`Link to ${value?.href}`}
          target={value.openInNewTab ? "_blank" : "_self"}
        >
          {children}
        </Link>
      )
    },
  },
  types: {
    image: ({ value }) => (
      <div>
        <SanityImage asset={value} width={1600} height={900} />
      </div>
    ),
  },
  hardBreak: () => <br />,
}

export function RichText<T>({ richText }: { richText?: T | null }) {
  if (!richText) return null

  return (
    <PortableText
      value={richText as unknown as PortableTextBlock[]}
      components={components}
      onMissingComponent={(_, { nodeType, type }) =>
        console.warn("missing component", nodeType, type)
      }
    />
  )
}
