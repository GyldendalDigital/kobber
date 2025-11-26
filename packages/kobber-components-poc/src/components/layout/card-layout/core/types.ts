import type { maxColumns, maxWidths } from "./config";

export interface Breakpoint {
  minContainerWidth: number;
  maxContainerWidth: number | undefined;
  minColumnWidth: number;
  maxColumnWidth: number;
  maxColumns: number;
}

export interface Props {
  maxWidth?: keyof typeof maxWidths;
  maxColumns?: keyof typeof maxColumns;
  paddingInline?: number;
  gap?: number;
  columnAspectRatio: number | undefined;
  modernCss?: boolean;
}

export interface ColumnProps {
  span?: keyof typeof maxColumns;
  columnAspectRatio: number | undefined;
  modernCss: boolean | undefined;
}
