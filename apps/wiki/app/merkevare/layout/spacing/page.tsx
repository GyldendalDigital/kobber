import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { SectionLayout } from "@/components/section-layout"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Spacing",
  image: placeholderImageUrl({}),
  description:
    "God bruk av luft bidrar til å organisere informasjon, forbedrer lesbarheten, og skaper en balansert og estetisk tiltalende side. Spacing refererer til hvordan mellomrom brukes i utformingen av en nettside. ",
}

type SpacingSizeTypes = {
  name: string
  px: number
  rem: number
  size: number
}

const spacingSizes: SpacingSizeTypes[] = [
  {
    name: "primitives.size.2",
    px: 2,
    rem: 0.125,
    size: 2,
  },
  {
    name: "primitives.size.4",
    px: 4,
    rem: 0.25,
    size: 4,
  },
  {
    name: "primitives.size.8",
    px: 8,
    rem: 0.5,
    size: 8,
  },
  {
    name: "primitives.size.12",
    px: 12,
    rem: 0.75,
    size: 12,
  },
  {
    name: "primitives.size.14",
    px: 14,
    rem: 0.875,
    size: 14,
  },
  {
    name: "primitives.size.16",
    px: 16,
    rem: 1,
    size: 16,
  },
  {
    name: "primitives.size.20",
    px: 20,
    rem: 1.25,
    size: 20,
  },
  {
    name: "primitives.size.24",
    px: 24,
    rem: 1.5,
    size: 24,
  },
  {
    name: "primitives.size.32",
    px: 32,
    rem: 2,
    size: 32,
  },
  {
    name: "primitives.size.40",
    px: 40,
    rem: 2.5,
    size: 40,
  },
  {
    name: "primitives.size.48",
    px: 48,
    rem: 3,
    size: 48,
  },
  {
    name: "primitives.size.56",
    px: 56,
    rem: 3.5,
    size: 56,
  },
  {
    name: "primitives.size.64",
    px: 64,
    rem: 4,
    size: 64,
  },
  {
    name: "primitives.size.96",
    px: 96,
    rem: 6,
    size: 96,
  },
  {
    name: "primitives.size.104",
    px: 104,
    rem: 6.5,
    size: 104,
  },
  {
    name: "primitives.size.120",
    px: 120,
    rem: 7.5,
    size: 120,
  },
  {
    name: "primitives.size.128",
    px: 128,
    rem: 8,
    size: 128,
  },
]

export default function SpacingPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading={metadata.title as string}
        ingress={`God bruk av luft bidrar til å organisere informasjon, forbedrer lesbarheten, og skaper en balansert og estetisk tiltalende side. Spacing refererer til hvordan mellomrom brukes i utformingen av en nettside. Dette inkluderer blant annet:
mellomrom mellom avsnitt og linjer, som påvirker lesbarheten ved å gi tekst nok luft til at den blir enkel å lese
Avstanden mellom innholdet og kanten av en boks eller ramme på siden (padding)
Avstand mellom elementer, der mellomrommet mellom bilder, tekst, overskrifter, og andre elementer bidrar til en organisert og visuelt tiltalende layout
Bruk av marginer, luften rundt kanten på en side, som skiller innholdet fra sidens kant `}
      />

      <div>
        {spacingSizes.map((size, index) => (
          <div
            key={size.name + index}
            className="grid grid-cols-4 items-center border-b border-[#E5CFD3] pb-[8px] pt-[8px]"
          >
            <span>{size.name}</span>
            <span>{size.px}px</span>
            <span>{size.rem}rem</span>
            <div className="ml-auto bg-[#691837]" style={{ width: size.size, height: size.size }} />
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}
