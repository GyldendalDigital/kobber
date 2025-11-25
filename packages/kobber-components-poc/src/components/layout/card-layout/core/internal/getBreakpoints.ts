import type { maxColumns, maxWidths } from "../config";
import type { Breakpoint } from "../types";

export const getBreakpoints = (
  maxWidth: keyof typeof maxWidths,
  columns: keyof typeof maxColumns,
): Breakpoint[] => {
  const interval = maxWidth / columns;
  const steps = Array.from({ length: columns });
  return steps.map((_, index) =>
    createBreakpoint({
      maxWidth,
      columns,
      index,
      interval,
    }),
  );
};

interface Options {
  maxWidth: keyof typeof maxWidths;
  columns: keyof typeof maxColumns;
  index: number;
  interval: number;
}

const createBreakpoint = (options: Options): Breakpoint => {
  const maxColumns = getMaxColumns(options);
  const minContainerWidth = getMinContainerWidth(options);
  const maxContainerWidth = getMaxContainerWidth(options);
  const minColumnWidth = getMinColumnWidth(minContainerWidth, maxColumns);
  const maxColumnWidth = getMaxColumnWidth(maxContainerWidth, maxColumns, options);
  return {
    minContainerWidth: Math.round(minContainerWidth),
    maxContainerWidth: maxContainerWidth ? Math.round(maxContainerWidth) : undefined,
    minColumnWidth: Math.round(minColumnWidth),
    maxColumnWidth: Math.round(maxColumnWidth),
    maxColumns,
  };
};

const getMaxColumns = ({ index }: Options) => {
  return index + 1;
};

const getMinContainerWidth = ({ index, interval }: Options) => {
  return index * interval;
};

const getMaxContainerWidth = ({ index, columns, interval }: Options) => {
  if (index === columns - 1) return undefined;
  return (index + 1) * interval - 1;
};

const getMinColumnWidth = (minContainerWidth: number, maxColumns: number) => {
  return minContainerWidth / maxColumns;
};

const getMaxColumnWidth = (
  maxContainerWidth: number | undefined,
  maxColumns: number,
  { maxWidth, columns }: Options,
) => {
  return maxContainerWidth
    ? Math.round(maxContainerWidth / maxColumns)
    : Math.round(maxWidth / columns);
};
