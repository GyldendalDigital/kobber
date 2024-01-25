import { TemplateResult } from "lit";
import { html } from "lit-html";
import { enumValueToKey } from "./helpers";
import { Scene } from "../Scene";
import { SceneBoundary } from "../SceneBoundary";
import { SceneColumn } from "../SceneColumn";
import { SceneRow } from "../SceneRow";
import {
  ActivityContentBoxFill,
  ActivityHorizontalAlignment,
  ActivityMaxWidth,
  ActivityVerticalAlignment,
  ActivityWhiteSpace,
} from "../types";

export interface SceneType
  extends Pick<Scene, "minHeight">,
    Pick<
      SceneBoundary,
      | "isFirstRow"
      | "isFullWidth"
      | "applyPaddingBottom"
      | "maxContentWidth"
      | "sceneWhitespace"
      | "sceneHorizontalAlignments"
      | "verticalAlignments"
      | "contentBoxFill"
    > {
  rows: Row[];
}

interface Row
  extends Pick<
    SceneRow,
    | "columns"
    | "rowWhitespace"
    | "sectionWhitespace"
    | "maxWidth"
    | "horizontalAlignment"
  > {
  columnItems: Column[];
}

interface Column
  extends Pick<SceneColumn, "sectionWhitespace" | "verticalAlignments"> {
  content: () => TemplateResult;
}

export const getExampleHeader = () => {
  return html`<div
    style="padding: 20px;  min-height: 120px; background-color: #F266AB;"
  ></div>`;
};

const exampleStyles = "padding: 20px; border-radius: 7px;";

export const getExampleContent1 = () => {
  return html`<div style="${exampleStyles} background-color: #FFB84C;"></div>`;
};

export const getExampleContent2 = () => {
  return html`<div style="${exampleStyles} background-color: #F266AB;"></div>`;
};

export const getExampleContent3 = () => {
  return html`<div style="${exampleStyles} background-color: #A459D1;"></div>`;
};

export const getExampleContent4 = () => {
  return html`<div style="${exampleStyles} background-color: #2CD3E1;"></div>`;
};

export const headerArgs: SceneType = {
  minHeight: "0",
  isFirstRow: true,
  isFullWidth: true,
  applyPaddingBottom: false,
  maxContentWidth: "",
  sceneWhitespace: enumValueToKey(
    ActivityWhiteSpace,
    ActivityWhiteSpace.Medium,
  ),
  sceneHorizontalAlignments: enumValueToKey(
    ActivityHorizontalAlignment,
    ActivityHorizontalAlignment.Center,
  ),
  verticalAlignments: enumValueToKey(
    ActivityVerticalAlignment,
    ActivityVerticalAlignment.Top,
  ),
  contentBoxFill: enumValueToKey(
    ActivityContentBoxFill,
    ActivityContentBoxFill.None,
  ),
  rows: [
    {
      columns: "1",
      rowWhitespace: ActivityWhiteSpace.None,
      sectionWhitespace: ActivityWhiteSpace.Medium,
      maxWidth: ActivityMaxWidth.None,
      horizontalAlignment: ActivityHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleHeader,
        },
      ],
    },
  ],
};

export const args: SceneType = {
  minHeight: "100vh",
  isFirstRow: false,
  isFullWidth: false,
  applyPaddingBottom: false,
  maxContentWidth: "",
  sceneWhitespace: enumValueToKey(
    ActivityWhiteSpace,
    ActivityWhiteSpace.Medium,
  ),
  sceneHorizontalAlignments: enumValueToKey(
    ActivityHorizontalAlignment,
    ActivityHorizontalAlignment.Center,
  ),
  verticalAlignments: enumValueToKey(
    ActivityVerticalAlignment,
    ActivityVerticalAlignment.Top,
  ),
  contentBoxFill: enumValueToKey(
    ActivityContentBoxFill,
    ActivityContentBoxFill.Dark,
  ),
  rows: [
    {
      columns: "1,1,1",
      rowWhitespace: ActivityWhiteSpace.Small,
      sectionWhitespace: ActivityWhiteSpace.Medium,
      maxWidth: ActivityMaxWidth.None,
      horizontalAlignment: ActivityHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleContent1,
        },
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleContent2,
        },
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleContent3,
        },
      ],
    },
    {
      columns: "1,1",
      rowWhitespace: ActivityWhiteSpace.None,
      sectionWhitespace: ActivityWhiteSpace.Medium,
      maxWidth: ActivityMaxWidth.None,
      horizontalAlignment: ActivityHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleContent4,
        },
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleContent1,
        },
      ],
    },
  ],
};

export const args2: SceneType = {
  minHeight: "100vh",
  isFirstRow: false,
  isFullWidth: false,
  applyPaddingBottom: false,
  maxContentWidth: "",
  sceneWhitespace: enumValueToKey(
    ActivityWhiteSpace,
    ActivityWhiteSpace.Medium,
  ),
  sceneHorizontalAlignments: enumValueToKey(
    ActivityHorizontalAlignment,
    ActivityHorizontalAlignment.Center,
  ),
  verticalAlignments: enumValueToKey(
    ActivityVerticalAlignment,
    ActivityVerticalAlignment.Top,
  ),
  contentBoxFill: enumValueToKey(
    ActivityContentBoxFill,
    ActivityContentBoxFill.None,
  ),
  rows: [
    {
      columns: "1,1,1",
      rowWhitespace: ActivityWhiteSpace.None,
      sectionWhitespace: ActivityWhiteSpace.Medium,
      maxWidth: ActivityMaxWidth.StandardText,
      horizontalAlignment: ActivityHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleContent1,
        },
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleContent2,
        },
        {
          sectionWhitespace: ActivityWhiteSpace.Medium,
          verticalAlignments: ActivityVerticalAlignment.Center,
          content: getExampleContent3,
        },
      ],
    },
  ],
};
