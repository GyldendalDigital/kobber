import { createComponent } from "@lit/react";
import * as React from "react";

export { Example, type ExampleProps } from "./example/Example";
export {
  ProficiencyBar,
  type Props as ProficiencyBarProps,
} from "./progress-bar/ProficiencyBar";
export {
  ProgressBar,
  type Props as ProgressBarProps,
} from "./progress-bar/ProgressBar";

import { Grid } from "./grid/Grid";
import { GridColumn } from "./grid/GridColumn";

export const KobberGrid = createComponent({
  tagName: "kobber-grid",
  elementClass: Grid,
  react: React,
});

export const KobberGridColumn = createComponent({
  tagName: "kobber-grid-column",
  elementClass: GridColumn,
  react: React,
});
