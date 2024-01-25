import { createComponent } from "@lit/react";
import * as React from "react";
import { Scene } from "./Scene";
import { SceneBoundary } from "./SceneBoundary";
import { SceneColumn } from "./SceneColumn";
import { SceneRow } from "./SceneRow";

export { groupRowsByPresentation } from "./groupRowsByPresentation";

export const KobberScene = createComponent({
  tagName: "kobber-scene",
  elementClass: Scene,
  react: React,
});

export const KobberSceneBoundary = createComponent({
  tagName: "kobber-scene-boundary",
  elementClass: SceneBoundary,
  react: React,
});

export const KobberSceneRow = createComponent({
  tagName: "kobber-scene-row",
  elementClass: SceneRow,
  react: React,
});

export const KobberSceneColumn = createComponent({
  tagName: "kobber-scene-column",
  elementClass: SceneColumn,
  react: React,
});
