import { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import { html } from "lit-html";
import React, { ComponentType, FunctionComponent } from "react";
import "./index.web-components";
import { ArgsStoryFn } from "@storybook/types";
import { SceneType, args, args2, headerArgs } from "./stories/examples";
import {
  enumKeyToValue,
  enumKeysToArray,
  getBodyCss,
  templateResultToString,
} from "./stories/helpers";
import {
  ActivityContentBoxFill,
  ActivityHorizontalAlignment,
  ActivityVerticalAlignment,
  ActivityWhiteSpace,
} from "./types";

export const Header: StoryObj<SceneType> = { args: headerArgs };

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
    <kobber-scene min-height="${args.minHeight}">
      <kobber-scene-boundary
        ?is-first-row=${args.isFirstRow}
        ?is-full-width=${args.isFullWidth}
        ?apply-padding-bottom=${args.applyPaddingBottom}
        max-content-width=${args.maxContentWidth}
        scene-whitespace=${enumKeyToValue(
          ActivityWhiteSpace,
          args.sceneWhitespace,
        )}
        scene-horizontal-alignments=${enumKeyToValue(
          ActivityHorizontalAlignment,
          args.sceneHorizontalAlignments,
        )}
        vertical-alignments=${enumKeyToValue(
          ActivityVerticalAlignment,
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
      options: enumKeysToArray(ActivityWhiteSpace),
    },
    sceneHorizontalAlignments: {
      control: "inline-radio",
      options: enumKeysToArray(ActivityHorizontalAlignment),
    },
    verticalAlignments: {
      control: "inline-radio",
      options: enumKeysToArray(ActivityVerticalAlignment),
    },
    contentBoxFill: {
      control: "inline-radio",
      options: enumKeysToArray(ActivityContentBoxFill),
    },
  },
  render,
} satisfies Meta<SceneType>;
