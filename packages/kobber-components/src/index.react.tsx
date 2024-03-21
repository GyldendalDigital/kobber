import { createComponent } from "@lit/react";
import * as React from "react";

export { Example, type ExampleProps } from "./example/Example";
export { ProficiencyBar, type Props as ProficiencyBarProps } from "./progress-bar/ProficiencyBar";
export { ProgressBar, type Props as ProgressBarProps } from "./progress-bar/ProgressBar";

import { Grid } from "./grid/Grid";
import { GridColumn } from "./grid/GridColumn";
import { Checkbox } from "./checkbox/Checkbox";

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

export const KobberCheckbox = createComponent({
  tagName: "kobber-checkbox",
  elementClass: Checkbox,
  react: React,
});
