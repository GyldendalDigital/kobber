import { KobberHeading, KobberIngress } from "@gyldendal/kobber-components/react"
import { CheckCircle, Remove } from "@gyldendal/kobber-icons/react-ssr-safe"
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
      return (
        <KobberHeading id={slug} level="h2" variant={"title medium"} font={"primary"}>
          {children}
        </KobberHeading>
      )
    },
    h2Italic: ({ children, value }) => {
      const slug = parseChildrenToSlug(value.children)
      return (
        <KobberHeading id={slug} level="h2" variant={"display small"} font={"secondary"}>
          {children}
        </KobberHeading>
      )
    },
    h3: ({ children, value }) => {
      const slug = parseChildrenToSlug(value.children)
      return <KobberIngress id={slug}>{children}</KobberIngress>
    },
    inline: ({ children }) => <p className={styles["inline"]}>{children}</p>,
  },
  marks: {
    iconPositive: ({ children }) => (
      <span className={cn(styles["icon-wrapper"], styles["positive"])}>
        <CheckCircle className={cn(styles["icon"])} />
        {children}
      </span>
    ),
    iconNegative: ({ children }) => (
      <span className={cn(styles["icon-wrapper"], styles["negative"])}>
        <Remove className={cn(styles["icon"])} />
        {children}
      </span>
    ),
    customLink: ({ children, value }) => {
      if (!value.href || value.href === "#") {
        console.warn("🚀 link is not set", value)
        return <span>Link Broken</span>
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
