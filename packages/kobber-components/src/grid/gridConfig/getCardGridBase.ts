import { layout } from "@gyldendal/kobber-base/themes/default/tokens";

interface GetCardGridBaseOptions {
  maxColumns: number;
  aspectRatioHeight: number;
}

export const getCardGridBase = ({ maxColumns, aspectRatioHeight }: GetCardGridBaseOptions) => {
  const gap = layout.gap["6-12"];

  const minCardWidth = 208;

  const oneColumnBreakpoint = 480;

  const containerQuery = `@container (max-width: ${oneColumnBreakpoint}px)`;

  const minColumnWidth = `calc(${minCardWidth}px + ${gap} + ${gap})`;

  return {
    id: "cardGrid",
    gridStyles: {
      gridTemplateColumns: {
        all: `repeat(
          auto-fit,
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
      gap: "0",
      paddingTop: gap,
      paddingRight: gap,
      paddingBottom: gap,
      paddingLeft: gap,
    },
    gridColumnStyles: {
      paddingTop: gap,
      paddingRight: gap,
      paddingBottom: gap,
      paddingLeft: gap,

      // Override custom grid column spans set by consumer
      gridColumn: {
        [containerQuery]: "span 1",
      },
    },
    gridColumnAspectRatioStyles: {
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
