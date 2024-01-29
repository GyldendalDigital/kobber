import { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import { ArgsStoryFn } from "@storybook/types";
import { html } from "lit-html";
import React, { ComponentType, FunctionComponent } from "react";
import "./index.web-components";
import {
  SceneType,
  args,
  args2,
  headerArgs,
  imageArgs,
} from "./stories/examples";
import {
  enumKeyToValue,
  enumKeysToArray,
  enumValueToKey,
  getBodyCss,
  templateResultToString,
} from "./stories/helpers";
import {
  ActivityContentBoxFill,
  RedapticBackgroundImageStyle,
  RedapticHorizontalAlignment,
  RedapticVerticalAlignment,
  RedapticWhiteSpace,
} from "./types";
import { backgroundImageUrl } from "./stories/background-image-url";

export const Header: StoryObj<SceneType> = { args: headerArgs };

export const BackgroundImageOnly: StoryObj<SceneType> = { args: imageArgs };

export const WithContextBoxFill: StoryObj<SceneType> = { args };

export const MultipleScenes: StoryObj<SceneType> = {
  args,
  parameters: {
    controls: {
      include: [],
    },
  },
  render: (_, context) => {
    return (
      <>
        {render(headerArgs, context)}
        {render({ ...args, minHeight: "" }, context)}
        {render({ ...args2, minHeight: "" }, context)}
        {render(imageArgs, context)}
        {render(
          {
            ...args,
            minHeight: "",
            contentBoxFill: enumValueToKey(
              ActivityContentBoxFill,
              ActivityContentBoxFill.White,
            ),
            imageBackground: {
              backgroundColor: "#FFB84Cee",
              backgroundImageUrl,
              backgroundImageStyle: RedapticBackgroundImageStyle.Fit,
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

const render: ArgsStoryFn<ReactRenderer, SceneType> = (args: SceneType) => {
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
        aria-label=${args.imageBackground["aria-label"]}
      />`}
      <kobber-scene-boundary
        ?is-first-row=${args.isFirstRow}
        ?is-full-width=${args.isFullWidth}
        ?apply-padding-bottom=${args.applyPaddingBottom}
        max-content-width=${args.maxContentWidth}
        scene-whitespace=${enumKeyToValue(
          RedapticWhiteSpace,
          args.sceneWhitespace,
        )}
        scene-horizontal-alignments=${enumKeyToValue(
          RedapticHorizontalAlignment,
          args.sceneHorizontalAlignments,
        )}
        vertical-alignments=${enumKeyToValue(
          RedapticVerticalAlignment,
          args.verticalAlignments,
        )}
        content-box-fill=${enumKeyToValue(
          ActivityContentBoxFill,
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
  component: Wrapper as unknown as ComponentType<SceneType>,
  title: "scene/scene",
  tags: ["autodocs"],
  argTypes: {
    sceneWhitespace: {
      control: "inline-radio",
      options: enumKeysToArray(RedapticWhiteSpace),
    },
    sceneHorizontalAlignments: {
      control: "inline-radio",
      options: enumKeysToArray(RedapticHorizontalAlignment),
    },
    verticalAlignments: {
      control: "inline-radio",
      options: enumKeysToArray(RedapticVerticalAlignment),
    },
    contentBoxFill: {
      control: "inline-radio",
      options: enumKeysToArray(ActivityContentBoxFill),
    },
  },
  render,
} satisfies Meta<SceneType>;
