import { Grid } from "../Grid";
import { GridColumn } from "../GridColumn";
import { GridColumnAspectRatio } from "../GridColumnAspectRatio";

export type GridConfigId = "none" | "cardGrid" | "tallCardGrid";

export interface GridConfig {
  id: GridConfigId;
  gridProperties?: Partial<Grid>;
  gridColumnProperties?: Partial<GridColumn>;
  gridColumnAspectRatioProperties?: Partial<GridColumnAspectRatio>;
}
