import { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import { ArgsStoryFn } from "@storybook/types";
import { html } from "lit-html";
import React, { ComponentType, FunctionComponent } from "react";
import { calculatePadding } from "./calculatePadding";
import "./index.web-components";
import { backgroundImageUrl } from "./stories/background-image-url";
import {
  SceneWithAdditionalControls,
  backgroundImageOnlyArgs,
  contextBoxFillArgs,
  headerArgs,
  plainRowArgs,
} from "./stories/examples";
import {
  enumKeyToValue,
  enumKeysToArray,
  enumValueToKey,
  getBodyCss,
  templateResultToString,
} from "./stories/helpers";
import {
  CmsBackgroundImageStyle,
  CmsContentBoxFill,
  CmsHorizontalAlignment,
  CmsVerticalAlignment,
  CmsWhiteSpace,
} from "./types";

export const Header: StoryObj<SceneWithAdditionalControls> = {
  args: headerArgs,
};

export const BackgroundImageOnly: StoryObj<SceneWithAdditionalControls> = {
  args: backgroundImageOnlyArgs,
};

export const ContextBoxFill: StoryObj<SceneWithAdditionalControls> = {
  args: contextBoxFillArgs,
};

export const PlainRow: StoryObj<SceneWithAdditionalControls> = {
  args: plainRowArgs,
};

export const MultipleScenes: StoryObj<SceneWithAdditionalControls> = {
  args: contextBoxFillArgs,
  parameters: {
    controls: {
      include: [],
    },
  },
  render: (_, context) => {
    return (
      <>
        {render(headerArgs, context)}
        {render({ ...contextBoxFillArgs, minHeight: "" }, context)}
        {render({ ...plainRowArgs, minHeight: "" }, context)}
        {render(backgroundImageOnlyArgs, context)}
        {render(
          {
            ...contextBoxFillArgs,
            minHeight: "",
            contentBoxFill: enumValueToKey(
              CmsContentBoxFill,
              CmsContentBoxFill.White,
            ),
            imageBackground: {
              backgroundColor: "#FFB84Cee",
              backgroundImageUrl,
              backgroundImageStyle: CmsBackgroundImageStyle.Fit,
              ariaLabel: contextBoxFillArgs.imageBackground?.ariaLabel ?? null,
              lang: contextBoxFillArgs.imageBackground?.lang ?? "",
            },
          },
          context,
        )}
      </>
    );
  },
};

const Wrapper: FunctionComponent<{ children: string }> = ({ children }) => (
  <div dangerouslySetInnerHTML={{ __html: children }} />
);

const render: ArgsStoryFn<ReactRenderer, SceneWithAdditionalControls> = (
  args: SceneWithAdditionalControls,
) => {
  const padding = calculatePadding({
    isFirstRow: args.calculatePadding_isFirstRow,
    isFullWidth: args.calculatePadding_isFullWidth,
    applyPaddingBottom: args.calculatePadding_applyPaddingBottom,
    sceneWhitespace: enumKeyToValue(
      CmsWhiteSpace,
      args.calculatePadding_sceneWhitespace,
    ) as unknown as CmsWhiteSpace,
    sceneHorizontalAlignments: enumKeyToValue(
      CmsHorizontalAlignment,
      args.calculatePadding_sceneHorizontalAlignments,
    ) as unknown as CmsHorizontalAlignment,
  });
  const template = html`
    <style>
      ${getBodyCss()}
    </style>
    <kobber-scene
      min-height="${args.minHeight}"
      responsive-breakpoint=${args.responsiveBreakpoint}
    >
      ${args.imageBackground &&
      html`<kobber-scene-image-background
        background-color=${args.imageBackground.backgroundColor}
        background-image-url=${args.imageBackground.backgroundImageUrl}
        background-image-style=${args.imageBackground.backgroundImageStyle}
        aria-label=${args.imageBackground.ariaLabel}
        lang=${args.imageBackground.lang}
      />`}
      <kobber-scene-boundary
        max-content-width=${args.maxContentWidth}
        padding=${JSON.stringify(padding)}
        vertical-alignments=${enumKeyToValue(
          CmsVerticalAlignment,
          args.verticalAlignments,
        )}
        content-box-fill=${enumKeyToValue(
          CmsContentBoxFill,
          args.contentBoxFill,
        )}
      >
        ${args.rows.map(
          (row) =>
            html`<kobber-scene-row
              columns=${row.columns}
              row-whitespace=${row.rowWhitespace}
              section-whitespace=${row.sectionWhitespace}
              max-width=${row.maxWidth}
              horizontal-alignment=${row.horizontalAlignment}
            >
              ${row.columnItems.map(
                (column) =>
                  html`<kobber-scene-column
                      section-whitespace=${column.sectionWhitespace}
                      vertical-alignments=${column.verticalAlignments}
                    >
                      ${column.content()}
                    </kobber-scene-row>`,
              )}
            </kobber-scene-row>`,
        )}
      </kobber-scene-boundary>
    </kobber-scene>
  `;
  return <Wrapper>{templateResultToString(template)}</Wrapper>;
};

export default {
  component: Wrapper as unknown as ComponentType<SceneWithAdditionalControls>,
  title: "scene/scene",
  tags: ["autodocs"],
  argTypes: {
    calculatePadding_sceneWhitespace: {
      control: "inline-radio",
      options: enumKeysToArray(CmsWhiteSpace),
    },
    calculatePadding_sceneHorizontalAlignments: {
      control: "inline-radio",
      options: enumKeysToArray(CmsHorizontalAlignment),
    },
    verticalAlignments: {
      control: "inline-radio",
      options: enumKeysToArray(CmsVerticalAlignment),
    },
    contentBoxFill: {
      control: "inline-radio",
      options: enumKeysToArray(CmsContentBoxFill),
    },
  },
  render,
} satisfies Meta<SceneWithAdditionalControls>;
