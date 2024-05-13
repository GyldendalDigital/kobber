import { layout } from "@gyldendal/kobber-base/themes/default/tokens";
import { GridConfig } from "./types";

interface GetCardGridBaseOptions {
  maxColumns: number;
  aspectRatioHeight: number;
}

export const getCardGridBase = ({ maxColumns, aspectRatioHeight }: GetCardGridBaseOptions): GridConfig => {
  const gap = layout.gap["6-12"];

  const minCardWidth = 208;

  const oneColumnBreakpoint = 520;

  // When container queries are supported everywhere, we can replace this with @container (max-width: ${oneColumnBreakpoint}px).
  // So that the grid's layout depends on its available width rather than screen width.
  const oneColumnQuery = `(max-width: ${oneColumnBreakpoint}px)`;

  const minColumnWidth = `calc(${minCardWidth}px + ${gap} + ${gap})`;

  return {
    id: "cardGrid",
    gridProperties: {
      padding: gap,
      gap: "0",
      containerType: "inline-size",
      gridTemplateColumns: {
        all: `repeat(
          auto-fill,
          minmax(
            min(
              100%,
              max(
                ${minColumnWidth},
                ${100 / maxColumns}%
              )
            ),
            1fr
          )
        )`,
        [oneColumnQuery]: "1fr",
      },
    },
    gridColumnAspectRatioProperties: {
      padding: gap,
      gridColumn: {
        [oneColumnQuery]: "span 1",
      },
      ["--span"]: {
        [oneColumnQuery]: "1",
      },
      aspectRatio: {
        all: `var(--span) / ${aspectRatioHeight}`,
        [oneColumnQuery]: `1 / ${aspectRatioHeight}`,
      },
    },
  };
};
