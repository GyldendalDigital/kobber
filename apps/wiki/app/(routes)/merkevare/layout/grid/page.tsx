import {
  KobberHeading,
  KobberIngress,
  KobberTextWrapper,
} from "@gyldendal/kobber-components/react-ssr-safe"
import { SectionLayout } from "@/components/section-layout"
import { metaBrandLayoutGrid } from "./grid.meta"

export const metadata = metaBrandLayoutGrid

export default function GridPage() {
  return (
    <SectionLayout>
      <KobberTextWrapper>
        <KobberHeading>{metadata.title as string}</KobberHeading>
        <KobberIngress>{metadata.description}</KobberIngress>

        <p>
          Vi bruker fem skjermstørrelser, kategorisert som x-small, small, medium, large og
          expanded. Standardvisningen er large som er vår 1:1 referanse i Figma. For et godt
          responsivt resultat anbefales det å skissere for flere skjermstørrelser, med riktig grid
          lagt på via Grid Styles i Figma.
        </p>
      </KobberTextWrapper>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-spacing-0">
          <thead className="grid grid-cols-[120px_120px_80px_80px_80px_100px_1fr] border-b border-[#E5CFD3] pb-[8px] pt-[8px]">
            <td className="">Størrelse</td>
            <td>Brekkpunkter</td>
            <td>Kolonner</td>
            <td>Gutter</td>
            <td>Marginer</td>
            <td>Maksbredde</td>
            <td>Typisk skjermbruk</td>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="grid grid-cols-[120px_120px_80px_80px_80px_100px_1fr] border-b border-[#E5CFD3] pb-[8px] pt-[8px] text-[16px]"
              >
                <td>{row.size}</td>
                <td>{row.breakpoint}</td>
                <td>{row.columns}</td>
                <td>{row.gutter}</td>
                <td>{row.margin}</td>
                <td>{row.maxWidth}px</td>
                <td>{row.typicalScreenUsage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionLayout>
  )
}

type TableDataProps = {
  size: "Extra-Small" | "Small" | "Medium" | "Large" | "Expanded"
  breakpoint: "320px" | "520px" | "720px" | "1280px" | "1600px +"
  columns: 4 | 8 | 12
  gutter: 16 | 24 | 32
  margin: 16 | 24 | 40 | 64 | 128
  maxWidth: 288 | 474 | 640 | 1088 | 1344
  typicalScreenUsage: string
}

const tableData: TableDataProps[] = [
  {
    size: "Extra-Small",
    breakpoint: "320px",
    columns: 4,
    gutter: 16,
    margin: 16,
    maxWidth: 288,
    typicalScreenUsage: "Mobil i portrett",
  },
  {
    size: "Small",
    breakpoint: "520px",
    columns: 4,
    gutter: 16,
    margin: 24,
    maxWidth: 474,
    typicalScreenUsage: "Mobil",
  },
  {
    size: "Medium",
    breakpoint: "720px",
    columns: 8,
    gutter: 16,
    margin: 40,
    maxWidth: 640,
    typicalScreenUsage: "Nettbrett i portrett + mobil i landskap",
  },
  {
    size: "Large",
    breakpoint: "1280px",
    columns: 8,
    gutter: 24,
    margin: 64,
    maxWidth: 1088,
    typicalScreenUsage: "Laptop + nettbrett i landskap",
  },

  {
    size: "Expanded",
    breakpoint: "1600px +",
    columns: 12,
    gutter: 32,
    margin: 128,
    maxWidth: 1344,
    typicalScreenUsage: "Laptop 0 Ekstra store skjermer",
  },
]
