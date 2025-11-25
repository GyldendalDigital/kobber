import { breakpoints } from "../config";

export const getColumnContainerQuery = (spanFrom: number, spanTo: number) => {
  const breakpoint = breakpoints[1200][spanFrom];

  return `@container kobber-card-layout-1h95l5d0 (min-width: ${spanFrom}px) and (max-width: ${spanTo}px)`;
};
