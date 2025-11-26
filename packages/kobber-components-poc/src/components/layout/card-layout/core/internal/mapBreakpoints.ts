import { breakpoints, type maxColumns, type maxWidths } from "../config";
import type { Breakpoint } from "../types";

type MaxColumns = keyof typeof maxColumns;

type MaxWidth = keyof typeof maxWidths;

type Callback<T> = (maxWidth: MaxWidth, maxColumns: MaxColumns, breakpoint: Breakpoint) => T;

export const mapBreakpoints = <T>(callback: Callback<T>) => {
  const entries = Object.entries(breakpoints);

  return entries.flatMap(([key, breakpointEntries]) => {
    const maxWidth = Number(key) as unknown as keyof typeof maxWidths;

    return Object.entries(breakpointEntries).flatMap(([maxColumnsKey, breakpoints]) => {
      const maxCols = Number(maxColumnsKey) as unknown as keyof typeof maxColumns;

      return breakpoints.flatMap(breakpoint => callback(maxWidth, maxCols, breakpoint));
    });
  });
};
