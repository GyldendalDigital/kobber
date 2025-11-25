import { createContainer, globalStyle } from "@vanilla-extract/css";
import { className } from "../../../../cssProcessing/className";
import type { maxColumns, maxWidths } from "../core/config";
import { uniqueBy } from "../core/internal/array";
import { mapBreakpoints } from "../core/internal/mapBreakpoints";
import type { Breakpoint } from "../core/types";
import { gapVar, maxColumnsVar, maxSpanVar, maxWidthVar, paddingInlineVar } from "./variables.css";

export const containerName = createContainer();

const paddingInline = `calc(
  (
    var(${paddingInlineVar}) -
    (var(${gapVar}) / 2)
  ) * 1px
)`;

export const root = className("root", {
  boxSizing: "border-box",
  width: "100%",
  minWidth: 0,
  paddingBlock: `calc((var(${gapVar}) / 2) * 1px)`,
  paddingInline,
});

export const queryContainer = className("query-container", {
  width: "100%",
  minWidth: 0,
  justifyItems: "center",
  containerType: "inline-size",
  containerName,
});

globalStyle(`${root} *, ${root} *::before, ${root} *::after`, {
  boxSizing: "inherit",
});

export const grid = className("grid", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: `repeat(var(${maxSpanVar}), 1fr)`,
  maxWidth: `calc(var(${maxWidthVar}) / 16 * 1rem)`,
});

interface ModifierClass {
  maxWidth: keyof typeof maxWidths;
  maxColumns: keyof typeof maxColumns;
  generatedClassName: string;
}

export const modifierClasses = mapBreakpoints((maxWidth, maxColumns, breakpoint): ModifierClass => {
  const name = `${maxWidth}-${maxColumns}`;
  const generatedClassName = createContainerQueryClass(name, breakpoint);
  return { generatedClassName, maxWidth, maxColumns };
}).filter(uniqueBy(({ generatedClassName }) => generatedClassName));

function createContainerQueryClass(name: string, breakpoint: Breakpoint) {
  const query =
    breakpoint.maxContainerWidth !== undefined
      ? `(min-width: ${breakpoint.minContainerWidth}px) and (max-width: ${breakpoint.maxContainerWidth}px)`
      : `(min-width: ${breakpoint.minContainerWidth}px)`;
  const containerQuery = `${containerName} ${query}`;
  return className(name, {
    "@container": {
      [containerQuery]: {
        [maxSpanVar as string]: breakpoint.maxColumns.toString(),
      },
    },
  });
}

// Columns can only span one column in Legacy browsers without container query support

export const modifierForLegacyBrowsers = className("legacy-browser", {
  [maxSpanVar as string]: "1",
  gridTemplateColumns: `repeat(
      auto-fill,
      minmax(
        min(
          100%,
          max(
            calc(var(${maxWidthVar}) / var(${maxColumnsVar}) * 1px),
            calc(100% / var(${maxColumnsVar}))
          )
        ),
        1fr
      )
    )`,
});
