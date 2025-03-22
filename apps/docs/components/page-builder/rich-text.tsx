import { KobberHeading, KobberIngress } from "@gyldendal/kobber-components/react-ssr-safe"
import { PortableText, type PortableTextBlock, type PortableTextReactComponents } from "next-sanity"
import { RouterTextLink } from "../global/router-link"
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
      console.log("h2", children, value)
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
    image: ({ value }) => (
      <div className="my-2">
        <div className="overflow-hidden rounded-lg">
          <SanityImage asset={value} width={1600} height={900} />
        </div>
        {value.caption && <small>{value.caption}</small>}
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
