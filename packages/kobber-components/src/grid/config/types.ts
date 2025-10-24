import type { Grid } from "../Grid";
import type { GridColumn } from "../GridColumn";
import type { GridColumnAspectRatio } from "../GridColumnAspectRatio";

export type GridConfigId = "none" | "cardGrid" | "tallCardGrid";

export interface GridConfig {
  id: GridConfigId;
  gridProperties?: Partial<Grid>;
  gridColumnProperties?: Partial<GridColumn>;
  gridColumnAspectRatioProperties?: Partial<GridColumnAspectRatio>;
}
