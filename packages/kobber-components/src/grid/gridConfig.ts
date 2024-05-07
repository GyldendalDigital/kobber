import { layout } from "@gyldendal/kobber-base/themes/default/tokens";
import { Grid } from "./Grid";
import { GridColumn } from "./GridColumn";
import { GridColumnAspectRatio } from "./GridColumnAspectRatio";

export type GridConfigId = "none" | "cardGrid";

type GridStyles = Pick<
  Grid,
  "gridTemplateColumns" | "gridAutoColumns" | "gap" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"
>;

type GridColumnStyles = Pick<
  GridColumn,
  "gridColumn" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"
>;

type GridColumnAspectRatioStyles = GridColumnStyles & Pick<GridColumnAspectRatio, "--span" | "aspectRatio">;

export interface GridConfig {
  id: GridConfigId;
  gridStyles?: GridStyles;
  gridColumnStyles?: GridColumnStyles;
  gridColumnAspectRatioStyles?: GridColumnAspectRatioStyles;
}

const getCardGridConfig = (): GridConfig => {
  const gap = layout.gap["6-12"];

  const oneColumnBreakpoint = 480;

  const containerQuery = `@container (max-width: ${oneColumnBreakpoint}px)`;

  const minCardWidth = 208;

  const minColumnWidth = `calc(${minCardWidth}px + ${gap} + ${gap})`;

  const maxColumns = 4;

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
        // all: "1 / 1.125",
        all: "var(--span) / 1.125",
        [containerQuery]: "1/1.125",
      },
    },
  };
};

export const gridConfigs: Record<string, GridConfig> = {
  none: { id: "none" },
  cardGrid: getCardGridConfig(),
};
