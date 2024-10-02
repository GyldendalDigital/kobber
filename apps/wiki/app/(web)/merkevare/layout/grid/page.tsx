import { SectionLayout } from "@/components/section-layout";
import { TextCollection } from "@/components/text-collection";
import s from "@/assets/brand/Layout/layout_grid.svg";
import Image from "next/image";
import { Ingress } from "@/components/ingress";
import { SubHeading } from "@/components/sub-heading";
import { semantics, grid, mediaQuery } from "@gyldendal/kobber-base/themes/default/tokens";
import { FunctionComponent } from "react";

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
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table className="w-full border-spacing-0">
          <thead>
            <td className="p-8">Størrelse</td>
            <td>Brekkpunkter</td>
            <td>Kolonner</td>
            <td>Gutter</td>
            <td>Marginer</td>
            <td>Maksbredde</td>
          </thead>
          {Object.entries(semantics.layout.page.breakpoint).map(([sizeName, sizeValue]) =>
            BreakpointRow(sizeName as BreakpointName, sizeValue),
          )}
        </table>
      </div>
      <SubHeading text="Bruk av grid" />
      <Ingress text="For å sørge for god responsivitet burde designere skissere opp de ulike skjermstørrelsene. Legg på riktig grid via Grid Styles i Figma." />
      <SubHeading text="Begreper" />
      <Ingress
        text="Marginer er avstanden mellom innholdet og kanten på siden eller beholderen.Kolonner er vertikale seksjoner som deler opp innholdet på en side for å skape struktur.Gutters er mellomrommet mellom kolonnene, som skaper luft og skiller innholdet visuelt.
Container er rammen rundt innholdet som vises. På små skjermer brukes kun én, på større skjermer kan det være plass til to, kanskje tre, avhengig av behov."
      />
    </SectionLayout>
  );
}

type BreakpointName = keyof typeof semantics.layout.page.breakpoint;

const BreakpointRow = (name: BreakpointName, value: number) => (
  <tr key={name} className="border-b-2 border-grey-200 border-spacing-0">
    <td className="capitalize p-8">{name}</td>
    <td>
      <UnitFormatter>{value}</UnitFormatter>
    </td>
    {/* TODO: add missing tokens */}
    <td>{name === "xsmall" ? null : grid[name].count}</td>
    <td>{name === "xsmall" ? null : grid[name].gutterSize}</td>
    <td>{name === "xsmall" ? null : grid[name].offset}</td>
    <td>{name === "xsmall" || name === "expanded" ? null : mediaQuery[name]}</td>
  </tr>
);

interface Props {
  children?: number;
  type?: "px";
}

export const UnitFormatter: FunctionComponent<Props> = ({ children, type = "px" }) => {
  if (children && type === "px") {
    const pixels = children;
    return (
      <>
        {pixels}px ({pixels / 16}rem)
      </>
    );
  }
  return null;
};
