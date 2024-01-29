import { TemplateResult } from "lit";
import { html } from "lit-html";
import { backgroundImageUrl } from "./background-image-url";
import { enumValueToKey } from "./helpers";
import { Scene } from "../Scene";
import { SceneBoundary } from "../SceneBoundary";
import { SceneColumn } from "../SceneColumn";
import { SceneImageBackground } from "../SceneImageBackground";
import { SceneRow } from "../SceneRow";
import {
  RedapticBackgroundImageStyle,
  RedapticContentBoxFill,
  RedapticHorizontalAlignment,
  RedapticMaxWidth,
  RedapticVerticalAlignment,
  RedapticWhiteSpace,
} from "../types";

export interface SceneType
  extends Pick<Scene, "minHeight" | "responsiveBreakpoint">,
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
  imageBackground?: ImageBackground;
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

interface ImageBackground
  extends Pick<
    SceneImageBackground,
    | "backgroundColor"
    | "backgroundImageUrl"
    | "backgroundImageStyle"
    | "width"
    | "ariaLabel"
    | "lang"
  > {}

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

const responsiveBreakpoint = 640;

const maxContentWidth = "800px";

export const headerArgs: SceneType = {
  minHeight: "0",
  isFirstRow: true,
  isFullWidth: true,
  applyPaddingBottom: false,
  maxContentWidth,
  responsiveBreakpoint,
  sceneWhitespace: enumValueToKey(
    RedapticWhiteSpace,
    RedapticWhiteSpace.Medium,
  ),
  sceneHorizontalAlignments: enumValueToKey(
    RedapticHorizontalAlignment,
    RedapticHorizontalAlignment.Center,
  ),
  verticalAlignments: enumValueToKey(
    RedapticVerticalAlignment,
    RedapticVerticalAlignment.Top,
  ),
  contentBoxFill: enumValueToKey(
    RedapticContentBoxFill,
    RedapticContentBoxFill.None,
  ),
  rows: [
    {
      columns: "1fr",
      rowWhitespace: RedapticWhiteSpace.None,
      sectionWhitespace: RedapticWhiteSpace.Medium,
      maxWidth: RedapticMaxWidth.None,
      horizontalAlignment: RedapticHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
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
  maxContentWidth,
  responsiveBreakpoint,
  sceneWhitespace: enumValueToKey(
    RedapticWhiteSpace,
    RedapticWhiteSpace.Medium,
  ),
  sceneHorizontalAlignments: enumValueToKey(
    RedapticHorizontalAlignment,
    RedapticHorizontalAlignment.Center,
  ),
  verticalAlignments: enumValueToKey(
    RedapticVerticalAlignment,
    RedapticVerticalAlignment.Top,
  ),
  contentBoxFill: enumValueToKey(
    RedapticContentBoxFill,
    RedapticContentBoxFill.Dark,
  ),
  imageBackground: {
    backgroundColor: "#444444aa",
    ariaLabel: "aria-label",
    lang: "en",
  },
  rows: [
    {
      columns: "1fr 1fr 1fr",
      rowWhitespace: RedapticWhiteSpace.Small,
      sectionWhitespace: RedapticWhiteSpace.Medium,
      maxWidth: RedapticMaxWidth.None,
      horizontalAlignment: RedapticHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
          content: getExampleContent1,
        },
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
          content: getExampleContent2,
        },
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
          content: getExampleContent3,
        },
      ],
    },
    {
      columns: "1fr 1fr",
      rowWhitespace: RedapticWhiteSpace.None,
      sectionWhitespace: RedapticWhiteSpace.Medium,
      maxWidth: RedapticMaxWidth.None,
      horizontalAlignment: RedapticHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
          content: getExampleContent4,
        },
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
          content: getExampleContent1,
        },
      ],
    },
  ],
};

export const imageArgs: SceneType = {
  minHeight: "100vh",
  isFirstRow: false,
  isFullWidth: false,
  applyPaddingBottom: false,
  maxContentWidth,
  responsiveBreakpoint,
  imageBackground: {
    backgroundColor: "#F266AB",
    backgroundImageUrl,
    ariaLabel: "aria-label",
    lang: "en",
    backgroundImageStyle: RedapticBackgroundImageStyle.Fit,
  },
  sceneWhitespace: enumValueToKey(
    RedapticWhiteSpace,
    RedapticWhiteSpace.Medium,
  ),
  sceneHorizontalAlignments: enumValueToKey(
    RedapticHorizontalAlignment,
    RedapticHorizontalAlignment.Center,
  ),
  verticalAlignments: enumValueToKey(
    RedapticVerticalAlignment,
    RedapticVerticalAlignment.Top,
  ),
  contentBoxFill: enumValueToKey(
    RedapticContentBoxFill,
    RedapticContentBoxFill.None,
  ),
  rows: [],
};

export const args2: SceneType = {
  minHeight: "100vh",
  isFirstRow: false,
  isFullWidth: false,
  applyPaddingBottom: false,
  maxContentWidth,
  responsiveBreakpoint,
  sceneWhitespace: enumValueToKey(
    RedapticWhiteSpace,
    RedapticWhiteSpace.Medium,
  ),
  sceneHorizontalAlignments: enumValueToKey(
    RedapticHorizontalAlignment,
    RedapticHorizontalAlignment.Center,
  ),
  verticalAlignments: enumValueToKey(
    RedapticVerticalAlignment,
    RedapticVerticalAlignment.Top,
  ),
  contentBoxFill: enumValueToKey(
    RedapticContentBoxFill,
    RedapticContentBoxFill.None,
  ),
  rows: [
    {
      columns: "1fr 1fr 1fr",
      rowWhitespace: RedapticWhiteSpace.None,
      sectionWhitespace: RedapticWhiteSpace.Medium,
      maxWidth: RedapticMaxWidth.StandardText,
      horizontalAlignment: RedapticHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
          content: getExampleContent1,
        },
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
          content: getExampleContent2,
        },
        {
          sectionWhitespace: RedapticWhiteSpace.Medium,
          verticalAlignments: RedapticVerticalAlignment.Center,
          content: getExampleContent3,
        },
      ],
    },
  ],
};
