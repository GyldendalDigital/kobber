import { createComponent } from "@lit/react";
import * as React from "react";

import { Grid } from "./grid/Grid";
import { GridColumn } from "./grid/GridColumn";
import { Checkbox } from "./checkbox/Checkbox";
import { ProgressBar } from "./progress-bar/ProgressBar";
import { ProgressBarItem } from "./progress-bar/ProgressBarItem";
import { GridColumnAspectRatio } from "./grid/GridColumnAspectRatio";
import { CardLayout } from "./layouts/card-layout/CardLayout";
import { CardLayoutColumnAspectRatio } from "./layouts/card-layout/CardLayoutColumnAspectRatio";
import { BoxLayout } from "./layouts/box-layout/BoxLayout";
import { Button } from "./button/Button";
import { ThemeContextProvider } from "./utils/theme-context";

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

export const KobberGridColumnAspectRatio = createComponent({
  tagName: "kobber-grid-column-aspect-ratio",
  elementClass: GridColumnAspectRatio,
  react: React,
});

export const KobberCheckbox = createComponent({
  tagName: "kobber-checkbox",
  elementClass: Checkbox,
  react: React,
});

export const KobberProgressBar = createComponent({
  tagName: "kobber-progress-bar",
  elementClass: ProgressBar,
  react: React,
});

export const KobberProgressBarItem = createComponent({
  tagName: "kobber-progress-bar-item",
  elementClass: ProgressBarItem,
  react: React,
});

export const KobberCardLayout = createComponent({
  tagName: "kobber-card-layout",
  elementClass: CardLayout,
  react: React,
});

export const KobberCardLayoutColumnAspectRatio = createComponent({
  tagName: "kobber-card-layout-column-aspect-ratio",
  elementClass: CardLayoutColumnAspectRatio,
  react: React,
});

export const KobberBoxLayout = createComponent({
  tagName: "kobber-box-layout",
  elementClass: BoxLayout,
  react: React,
});

export const KobberButton = createComponent({
  tagName: "kobber-button",
  elementClass: Button,
  react: React,
});

export const KobberThemeContext = createComponent({
  tagName: "kobber-theme-context",
  elementClass: ThemeContextProvider,
  react: React,
});
