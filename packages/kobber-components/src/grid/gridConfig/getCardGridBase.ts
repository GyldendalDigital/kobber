import { layout } from "@gyldendal/kobber-base/themes/default/tokens";
import { GridConfig } from "./types";

interface GetCardGridBaseOptions {
  maxColumns: number;
  aspectRatioHeight: number;
}

export const getCardGridBase = ({ maxColumns, aspectRatioHeight }: GetCardGridBaseOptions): GridConfig => {
  const gap = layout.gap["6-12"];

  const minCardWidth = 208;

  const oneColumnBreakpoint = 480;

  const containerQuery = `@container (max-width: ${oneColumnBreakpoint}px)`;

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
        [containerQuery]: "1fr",
      },
    },
    gridColumnAspectRatioProperties: {
      padding: gap,
      gridColumn: {
        [containerQuery]: "span 1",
      },
      ["--span"]: {
        [containerQuery]: "1",
      },
      aspectRatio: {
        all: `var(--span) / ${aspectRatioHeight}`,
        [containerQuery]: `1 / ${aspectRatioHeight}`,
      },
    },
  };
};
