import { getBreakpoints } from "./internal/getBreakpoints";
import type { Breakpoint, ColumnProps, Props } from "./types";

export const maxColumns = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
} as const;

export const maxWidths = {
  960: 960,
  1200: 1200,
  1400: 1600,
} as const;

type BreakpointsEntry = Record<keyof typeof maxColumns, Breakpoint[]>;

export const breakpoints = {
  960: {
    1: getBreakpoints(960, 1),
    2: getBreakpoints(960, 2),
    3: getBreakpoints(960, 3),
    4: getBreakpoints(960, 4),
    5: getBreakpoints(960, 5),
    6: getBreakpoints(960, 6),
    7: getBreakpoints(960, 7),
    8: getBreakpoints(960, 8),
    9: getBreakpoints(960, 9),
    10: getBreakpoints(960, 10),
    11: getBreakpoints(960, 11),
    12: getBreakpoints(960, 12),
  },
  1200: {
    1: getBreakpoints(1200, 1),
    2: getBreakpoints(1200, 2),
    3: getBreakpoints(1200, 3),
    4: getBreakpoints(1200, 4),
    5: getBreakpoints(1200, 5),
    6: getBreakpoints(1200, 6),
    7: getBreakpoints(1200, 7),
    8: getBreakpoints(1200, 8),
    9: getBreakpoints(1200, 9),
    10: getBreakpoints(1200, 10),
    11: getBreakpoints(1200, 11),
    12: getBreakpoints(1200, 12),
  },
  1400: {
    1: getBreakpoints(1400, 1),
    2: getBreakpoints(1400, 2),
    3: getBreakpoints(1400, 3),
    4: getBreakpoints(1400, 4),
    5: getBreakpoints(1400, 5),
    6: getBreakpoints(1400, 6),
    7: getBreakpoints(1400, 7),
    8: getBreakpoints(1400, 8),
    9: getBreakpoints(1400, 9),
    10: getBreakpoints(1400, 10),
    11: getBreakpoints(1400, 11),
    12: getBreakpoints(1400, 12),
  },
} satisfies Record<keyof typeof maxWidths, BreakpointsEntry>;

export const defaults: Required<
  Pick<Props, "maxWidth" | "maxColumns" | "paddingInline" | "gap" | "modernCss">
> = {
  maxWidth: 1200,
  maxColumns: 12,
  paddingInline: 0,
  gap: 0,
  modernCss: true,
};

export const columnDefaults: Required<Pick<ColumnProps, "span">> = {
  span: 1,
};
