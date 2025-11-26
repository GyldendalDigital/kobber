import type { HTMLAttributes } from "react";
import { breakpoints, type maxColumns, type maxWidths } from "../core/config";

interface Props extends HTMLAttributes<HTMLPreElement> {
  maxContainerWidth: keyof typeof maxWidths;
  maxColumns: keyof typeof maxColumns;
}

export const Info = ({ maxContainerWidth, maxColumns, ...props }: Props) => (
  <pre {...props}>
    <BreakpointRow
      availableWidth="Available width"
      columns="Columns"
      columnWidth="Column width"
    />
    {breakpoints[maxContainerWidth][maxColumns].map((breakpoint, index) => (
      <BreakpointRow
        key={index.toString()}
        availableWidth={[
          breakpoint.minContainerWidth,
          breakpoint.maxContainerWidth ?? Infinity,
        ]}
        columns={breakpoint.maxColumns}
        columnWidth={[breakpoint.minColumnWidth, breakpoint.maxColumnWidth]}
      />
    ))}
    <br />
    <DefinitionRow
      term="Available width"
      definition="container width - padding inline"
    />
    <DefinitionRow
      term="Columns"
      definition="container width / max grid width * max columns"
    />
    <DefinitionRow term="Column width" definition="available width / columns" />
  </pre>
);

interface BreakpointRowProps {
  availableWidth: string | [number, number];
  columns: string | number;
  columnWidth: string | [number, number];
}

const BreakpointRow = ({
  availableWidth,
  columns,
  columnWidth,
}: BreakpointRowProps) => (
  <>
    {formatTuple(availableWidth).padEnd(20)} {columns.toString().padEnd(10)}{" "}
    {formatTuple(columnWidth).padEnd(20)}
    <br />
  </>
);

const formatTuple = (value: string | [number, number]) =>
  typeof value === "string"
    ? value
    : [value[0].toString().padStart(4), value[1].toString().padEnd(4)].join(
        " - "
      );

interface DefinitionRowProps {
  term: string;
  definition: string;
}

const DefinitionRow = ({ term, definition }: DefinitionRowProps) => (
  <>
    {term.padEnd(16)} = {definition}
    <br />
  </>
);
