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
  CmsBackgroundImageStyle,
  CmsContentBoxFill,
  CmsHorizontalAlignment,
  CmsMaxWidth,
  CmsVerticalAlignment,
  CmsWhiteSpace,
} from "../types";
import { CalculatePaddingOptions } from "../calculatePadding";

export interface SceneType
  extends Pick<Scene, "minHeight" | "responsiveBreakpoint">,
    Pick<SceneBoundary, "maxContentWidth" | "verticalAlignments" | "contentBoxFill"> {
  imageBackground?: ImageBackground;
  rows: Row[];
}

export interface SceneWithAdditionalControls extends SceneType {
  // These properties are not defined in any component, but instead passed through the calculatePadding-function
  calculatePadding_isFirstRow: CalculatePaddingOptions["isFirstRow"];
  calculatePadding_presentation: CalculatePaddingOptions["presentation"];
  calculatePadding_applyPaddingBottom: CalculatePaddingOptions["applyPaddingBottom"];
  calculatePadding_sceneWhitespace: CalculatePaddingOptions["cmsWhiteSpace"];
  calculatePadding_sceneHorizontalAlignments: CalculatePaddingOptions["cmsHorizontalAlignment"];
}

interface Row
  extends Pick<SceneRow, "columns" | "rowWhitespace" | "sectionWhitespace" | "maxWidth" | "horizontalAlignment"> {
  columnItems: Column[];
}

interface ImageBackground
  extends Pick<
    SceneImageBackground,
    "backgroundColor" | "backgroundImageUrl" | "backgroundImageStyle" | "width" | "ariaLabel" | "lang"
  > {}

interface Column extends Pick<SceneColumn, "sectionWhitespace" | "verticalAlignments"> {
  content: () => TemplateResult;
}

export const getExampleHeader = () => {
  return html`<div style="padding: 20px;  min-height: 120px; background-color: #F266AB;"></div>`;
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

export const headerArgs: SceneWithAdditionalControls = {
  minHeight: "0",
  maxContentWidth,
  responsiveBreakpoint,
  calculatePadding_isFirstRow: true,
  calculatePadding_presentation: "fullWidth",
  calculatePadding_applyPaddingBottom: false,
  calculatePadding_sceneWhitespace: enumValueToKey(CmsWhiteSpace, CmsWhiteSpace.Medium),
  calculatePadding_sceneHorizontalAlignments: enumValueToKey(CmsHorizontalAlignment, CmsHorizontalAlignment.Center),
  verticalAlignments: enumValueToKey(CmsVerticalAlignment, CmsVerticalAlignment.Top),
  contentBoxFill: CmsContentBoxFill.None,
  rows: [
    {
      columns: "1fr",
      rowWhitespace: CmsWhiteSpace.None,
      sectionWhitespace: CmsWhiteSpace.Medium,
      maxWidth: CmsMaxWidth.None,
      horizontalAlignment: CmsHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleHeader,
        },
      ],
    },
  ],
};

export const contextBoxFillArgs: SceneWithAdditionalControls = {
  minHeight: "100vh",
  maxContentWidth,
  responsiveBreakpoint,
  calculatePadding_isFirstRow: false,
  calculatePadding_presentation: "normal",
  calculatePadding_applyPaddingBottom: false,
  calculatePadding_sceneWhitespace: enumValueToKey(CmsWhiteSpace, CmsWhiteSpace.Medium),
  calculatePadding_sceneHorizontalAlignments: enumValueToKey(CmsHorizontalAlignment, CmsHorizontalAlignment.Center),
  verticalAlignments: enumValueToKey(CmsVerticalAlignment, CmsVerticalAlignment.Top),
  contentBoxFill: enumValueToKey(CmsContentBoxFill, CmsContentBoxFill.Dark),
  imageBackground: {
    backgroundColor: "#444444aa",
    ariaLabel: "aria-label",
    lang: "en",
  },
  rows: [
    {
      columns: "1fr 1fr 1fr",
      rowWhitespace: CmsWhiteSpace.Small,
      sectionWhitespace: CmsWhiteSpace.Medium,
      maxWidth: CmsMaxWidth.None,
      horizontalAlignment: CmsHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleContent1,
        },
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleContent2,
        },
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleContent3,
        },
      ],
    },
    {
      columns: "1fr 1fr",
      rowWhitespace: CmsWhiteSpace.None,
      sectionWhitespace: CmsWhiteSpace.Medium,
      maxWidth: CmsMaxWidth.None,
      horizontalAlignment: CmsHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleContent4,
        },
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleContent1,
        },
      ],
    },
  ],
};

export const backgroundImageOnlyArgs: SceneWithAdditionalControls = {
  minHeight: "100vh",
  maxContentWidth,
  responsiveBreakpoint,
  calculatePadding_isFirstRow: false,
  calculatePadding_presentation: "normal",
  calculatePadding_applyPaddingBottom: false,
  calculatePadding_sceneWhitespace: enumValueToKey(CmsWhiteSpace, CmsWhiteSpace.Medium),
  calculatePadding_sceneHorizontalAlignments: enumValueToKey(CmsHorizontalAlignment, CmsHorizontalAlignment.Center),
  imageBackground: {
    backgroundColor: "#F266AB",
    backgroundImageUrl,
    ariaLabel: "aria-label",
    lang: "en",
    backgroundImageStyle: CmsBackgroundImageStyle.Fit,
  },
  verticalAlignments: enumValueToKey(CmsVerticalAlignment, CmsVerticalAlignment.Top),
  contentBoxFill: enumValueToKey(CmsContentBoxFill, CmsContentBoxFill.None),
  rows: [],
};

export const plainRowArgs: SceneWithAdditionalControls = {
  minHeight: "100vh",
  maxContentWidth,
  responsiveBreakpoint,
  calculatePadding_isFirstRow: false,
  calculatePadding_presentation: "normal",
  calculatePadding_applyPaddingBottom: false,
  calculatePadding_sceneWhitespace: enumValueToKey(CmsWhiteSpace, CmsWhiteSpace.Medium),
  calculatePadding_sceneHorizontalAlignments: enumValueToKey(CmsHorizontalAlignment, CmsHorizontalAlignment.Center),
  verticalAlignments: enumValueToKey(CmsVerticalAlignment, CmsVerticalAlignment.Top),
  contentBoxFill: enumValueToKey(CmsContentBoxFill, CmsContentBoxFill.None),
  rows: [
    {
      columns: "1fr 1fr 1fr",
      rowWhitespace: CmsWhiteSpace.None,
      sectionWhitespace: CmsWhiteSpace.Medium,
      maxWidth: CmsMaxWidth.StandardText,
      horizontalAlignment: CmsHorizontalAlignment.Center,
      columnItems: [
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleContent1,
        },
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleContent2,
        },
        {
          sectionWhitespace: CmsWhiteSpace.Medium,
          verticalAlignments: CmsVerticalAlignment.Center,
          content: getExampleContent3,
        },
      ],
    },
  ],
};
