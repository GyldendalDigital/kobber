import { Grid } from "../Grid";
import { GridColumn } from "../GridColumn";
import { GridColumnAspectRatio } from "../GridColumnAspectRatio";

export type GridConfigId = "none" | "cardGrid" | "tallCardGrid";

export type GridStyles = Pick<
  Grid,
  "gridTemplateColumns" | "gridAutoColumns" | "gap" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"
>;

export type GridColumnStyles = Pick<
  GridColumn,
  "gridColumn" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"
>;

export type GridColumnAspectRatioStyles = GridColumnStyles & Pick<GridColumnAspectRatio, "--span" | "aspectRatio">;

export interface GridConfig {
  id: GridConfigId;
  gridStyles?: GridStyles;
  gridColumnStyles?: GridColumnStyles;
  gridColumnAspectRatioStyles?: GridColumnAspectRatioStyles;
}
