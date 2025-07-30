import { GridConfig } from "./types";

interface GetCardGridBaseOptions {
  maxColumns: number;
  aspectRatioHeight: number;
}

export const layout = {
  contentMaxWidth: 1344,
  gap: {
    "8-16": "clamp(0.5rem, calc(0.38rem + 0.63vw), 1rem)",
    "8-24": "clamp(0.5rem, calc(0.25rem + 1.25vw), 1.5rem)",
    "8-96": "clamp(0.5rem, calc(-0.88rem + 6.88vw), 6rem)",
    "16-32": "clamp(1rem, calc(0.75rem + 1.25vw), 2rem)",
  },
  maxWidth: 1280,
};

export const getCardGridBase = ({ maxColumns, aspectRatioHeight }: GetCardGridBaseOptions): GridConfig => {
  const outerPadding = layout.gap["8-96"];

  const gap = layout.gap["8-16"];

  const minCardWidth = 208;

  // Below this point, two columns will be too small for minCardWidth
  const oneColumnBreakpoint = 488;

  // When container queries are supported everywhere, we can replace this with @container (max-width: ${oneColumnBreakpoint}px).
  // So that the grid's layout depends on its available width rather than screen width.
  const oneColumnQuery = `(max-width: ${oneColumnBreakpoint}px)`;

  const minColumnWidth = `calc(${minCardWidth}px + ${gap} + ${gap})`;

  return {
    id: "cardGrid",
    gridProperties: {
      padding: `${gap} ${outerPadding}`,
      // maxWidth: `${1112 / 16}rem`,
      maxWidth: `${1376 / 16}rem`,

      // Using css grid gaps will break aspect ratios
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
