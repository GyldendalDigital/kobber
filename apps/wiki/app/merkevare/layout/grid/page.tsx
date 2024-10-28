import Image from "next/image"
import s from "@/assets/brand/Layout/layout_grid.svg"
import { PageDetails } from "@/types/types"
import { pagePathname, placeholderImageUrl } from "@/lib/utils"
import { Ingress } from "@/components/ingress"
import { SectionLayout } from "@/components/section-layout"
import { SubHeading } from "@/components/sub-heading"
import { TextCollection } from "@/components/text-collection"

export const metadata: PageDetails = {
  href: pagePathname(import.meta.url),
  title: "Grid og skjermstørrelser",
  image: placeholderImageUrl({}),
  description:
    "Vi har definert en layout grid slik at våre løsninger skal fungere godt på alle skjermbredder og ha et helhetlig oppsett. Griden følger reglene for riktig spacing for å plassere elementer med jevn rytme, riktig hierarki og med god bruk av luft.",
}

type TableDataProps = {
  size: "Extra-Small" | "Small" | "Medium" | "Large" | "Expanded"
  breakpoint: "320px" | "520px" | "720px" | "1280px" | "1600px and up"
  columns: 4 | 8 | 12
  gutter: 16 | 24 | 32
  margin: 16 | 24 | 40 | 64 | 128
  maxWidth: 288 | 474 | 640 | 1088 | 1344
}

const tableData: TableDataProps[] = [
  {
    size: "Extra-Small",
    breakpoint: "320px",
    columns: 4,
    gutter: 16,
    margin: 16,
    maxWidth: 288,
  },
  {
    size: "Small",
    breakpoint: "520px",
    columns: 4,
    gutter: 16,
    margin: 24,
    maxWidth: 474,
  },
  {
    size: "Medium",
    breakpoint: "720px",
    columns: 8,
    gutter: 16,
    margin: 40,
    maxWidth: 640,
  },
  {
    size: "Large",
    breakpoint: "1280px",
    columns: 8,
    gutter: 24,
    margin: 64,
    maxWidth: 1088,
  },

  {
    size: "Expanded",
    breakpoint: "1600px and up",
    columns: 12,
    gutter: 32,
    margin: 128,
    maxWidth: 1344,
  },
]

export default function GridPage() {
  return (
    <SectionLayout>
      <TextCollection
        heading="Grid og skjermstørrelser"
        subheading="Grid"
        ingress={
          "Vi har definert en layout grid slik at våre løsninger skal fungere godt på alle skjermbredder og ha et helhetlig oppsett. Griden følger reglene for riktig spacing for å plassere elementer med jevn rytme, riktig hierarki og med god bruk av luft."
        }
      />
      <Image src={s} alt="" className="w-full" />
      <Ingress text="Bredden på kolonnene er prosentbasert og tilpasser seg skjermstørrelsen, og holder seg alltid proporsjonale. Innhold skal plasseres innenfor kolonnene, men effekter som skygger kan utvides til marg eller gutter. Sørg for at innhold strekker seg over flere kolonner, og unngå å bruke kolonnene som marg." />
      <SubHeading text="Skjermstørrelser" />
      <Ingress text="Layout til forskjellige skjermstørrelser hjelper oss til å designe konsekvent og skalerbart på tvers av alle digitale flater. Vi har definert skjermstørrelsene fra x-small, small, medium, large og expanded. " />
      <table className="w-full border-spacing-0">
        <thead className="grid grid-cols-6 border-b border-[#E5CFD3] pb-[8px] pt-[8px]">
          <td className="">Størrelse</td>
          <td>Brekkpunkter</td>
          <td>Kolonner</td>
          <td>Gutter</td>
          <td>Marginer</td>
          <td>Maksbredde</td>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="grid grid-cols-6 border-b border-[#E5CFD3] pb-[8px] pt-[8px] text-[16px]"
            >
              <td>{row.size}</td>
              <td>{row.breakpoint}</td>
              <td>{row.columns}</td>
              <td>{row.gutter}</td>
              <td>{row.margin}</td>
              <td>{row.maxWidth}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {Object.entries(semantics.layout.page.breakpoint).map(([sizeName, sizeValue]) =>
            BreakpointRow(sizeName as BreakpointName, sizeValue)
          )} */}
      <SubHeading text="Bruk av grid" />
      <Ingress text="For å sørge for god responsivitet burde designere skissere opp de ulike skjermstørrelsene. Legg på riktig grid via Grid Styles i Figma." />
      <SubHeading text="Begreper" />
      <Ingress
        text="Marginer er avstanden mellom innholdet og kanten på siden eller beholderen.Kolonner er vertikale seksjoner som deler opp innholdet på en side for å skape struktur.Gutters er mellomrommet mellom kolonnene, som skaper luft og skiller innholdet visuelt.
Container er rammen rundt innholdet som vises. På små skjermer brukes kun én, på større skjermer kan det være plass til to, kanskje tre, avhengig av behov."
      />
    </SectionLayout>
  )
}

// type BreakpointName = keyof typeof semantics.layout.page.breakpoint

// const mediaQuery = {
//   mobile: "(max-width: 599px)",
//   tablet: "(min-width: 600px) and (max-width: 899px)",
//   laptop: "(min-width: 900px) and (max-width: 1199px)",
//   desktop: "(min-width: 1200px) and (max-width: 1799px)",
//   "large-desktop": "(min-width: 1800px)",
// }

// const grid = {
//   mobile: { count: 4, gutterSize: "16px", offset: "8px" },
//   tablet: { count: 8, gutterSize: "24px", offset: "12px" },
//   laptop: { count: 12, gutterSize: "32px", offset: "16px" },
//   desktop: { count: 16, gutterSize: "40px", offset: "20px" },
//   "large-desktop": { count: 20, gutterSize: "48px", offset: "24px" },
// }

// const BreakpointRow = (name: BreakpointName, value: number) => (
//   <tr key={name} className="border-grey-200 border-spacing-0 border-b-2">
//     <td className="p-8 capitalize">{name}</td>
//     <td>
//       <UnitFormatter>{value}</UnitFormatter>
//     </td>
//     {/* TODO: add missing tokens */}
//     <td>{name === "mobile" ? null : grid[name].count}</td>
//     <td>{name === "tablet" ? null : grid[name].gutterSize}</td>
//     <td>{name === "laptop" ? null : grid[name].offset}</td>
//     <td>{name === "desktop" || name === "laptop" ? null : mediaQuery[name]}</td>
//     <td>{name === "large-desktop" || name === "laptop" ? null : mediaQuery[name]}</td>
//   </tr>
// )

// interface Props {
//   children?: number
//   type?: "px"
// }

// const UnitFormatter: FunctionComponent<Props> = ({ children, type = "px" }) => {
//   if (children && type === "px") {
//     const pixels = children
//     return (
//       <>
//         {pixels}px ({pixels / 16}rem)
//       </>
//     )
//   }
//   return null
// }
