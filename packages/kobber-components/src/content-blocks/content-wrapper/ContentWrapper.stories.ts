import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import { textModuleColors } from "../text-module/TextModule.core";
import "../components/text-block/TextBlock";
import "../components/content-top-block/ContentTopBlock";
import "./ContentWrapper";
import "../../badge-icon/BadgeIcon";
import "../../text/heading/Heading";
import "../../text/title/Title";
import "../../text/text-body/TextBody";
import { html } from "lit";
import "../../theme-context-provider/ThemeContext";
import "@gyldendal/kobber-icons/web-components";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { ifDefined } from "lit/directives/if-defined.js";
import { init as initComponents } from "../../base/init";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import { nestedTextModule } from "../../story/nestedTextModule";
import { contentWrapperColorVariants, contentWrapperTypes } from "./ContentWrapper.core";

initComponents();
initIcons();

const meta: Meta = {
  title: "Content Blocks/Content Wrapper",
  argTypes: {
    color: {
      options: textModuleColors,
      control: { type: "inline-radio" },
    },
    colorVariant: {
      options: contentWrapperColorVariants,
      control: { type: "inline-radio" },
    },
    showBadge: {
      name: "Show Badge",
      table: {
        category: "Top Block",
      },
    },
    showHeading: {
      name: "Show Heading",
      table: {
        category: "Top Block",
      },
    },
    showHeadingText: {
      name: "Show Text",
      table: {
        category: "Top Block",
      },
    },
    type: {
      options: contentWrapperTypes,
      control: { type: "inline-radio" },
    },
  },
  args: {
    color: textModuleColors[0],
    colorVariant: undefined,
    showBadge: true,
    showHeading: true,
    showHeadingText: true,
    showNested: true,
    type: undefined,
  },
};

export default meta;
type Story = StoryObj;

const mappedColor = (args: Args) => {
  if (args.color === "transparent") {
    return "neutral";
  }
  return args.color;
};

export const ContentWrapper: Story = {
  argTypes: {},
  args: {},
  decorators: [(story, _) => html`<div style="height: 96vh">${story()}</div>`], // Emulates usage in content-templates.
  render: args => html`
    <kobber-content-wrapper 
      color-variant=${ifDefined(args.colorVariant)}
      type=${ifDefined(args.type)}
    >
      <kobber-content-top-block>
        ${
          !args.showBadge
            ? ""
            : html`
        <kobber-badge-icon color-theme="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
          <kobber-pencil slot="icon"></kobber-pencil>
          Content Wrapper
        </kobber-badge-icon>
          `
        }
      ${
        !args.showHeading
          ? ""
          : html`   <kobber-heading color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">A long heading that appears in top block</kobber-heading>`
      }
      ${
        !args.showHeadingText
          ? ""
          : html`   <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
            <p>First paragraph here. Lorem ipsum dolor sit amet, consectetur adipiscing el it.</p>
            <p>Second paragraph here. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing el it.</p>
          </kobber-text-body>
          `
      }
      </kobber-content-top-block>

      <kobber-text-block>
        <kobber-title color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}" size="large">Title L</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
          <p>One paragraph here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. (${args.color})</p>
        </kobber-text-body>
      </kobber-text-block>
      ${args.showNested ? nestedTextModule(args) : ""}
      <kobber-text-block>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
          <p>Another one paragraph here.</p>
        </kobber-text-body>
      </kobber-text-block>

      <kobber-text-block>
        <kobber-title color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
          <p>One paragraph here. Lorem ipsum dolor sit amet, consectetur adipiscing el it.</p>
        </kobber-text-body>
      </kobber-text-block>
    </kobber-content-wrapper>
  `,
};
