import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import { textModuleColors, textModuleColorVariants } from "./text-module/TextModule.core";
import "./text-module/TextModule";
import "./components/text-block/TextBlock";
import "./components/content-top-block/ContentTopBlock";
import "./content-wrapper/ContentWrapper";
import "../badge-icon/BadgeIcon";
import "../text/heading/Heading";
import "../text/title/Title";
import "../text/text-body/TextBody";
import { html } from "lit";
import "../theme-context-provider/ThemeContext";
import "@gyldendal/kobber-icons/web-components";
import { init as initComponents } from "../base/init";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  contentWrapperColorVariants,
  contentWrapperTypes,
} from "./content-wrapper/ContentWrapper.core";
import { invertColorVariant } from "../base/utilities/invertColorVariant";

initComponents();
initIcons();

const meta: Meta = {
  argTypes: {
    color: {
      options: textModuleColors,
      control: { type: "inline-radio" },
    },
  },
  args: {
    color: textModuleColors[0],
    showBadge: true,
    showHeading: true,
    showNested: false,
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

const nestedTextModule = (args: Args) => {
  return html`
      <kobber-text-module color="${ifDefined(args.color)}" color-variant="${invertColorVariant(args.colorVariant)}">
        <kobber-badge-icon slot="badge" color-theme="${ifDefined(args.color)}" color-variant="${args.colorVariant}">
          <kobber-pencil slot="icon"></kobber-pencil>
          Visste du?
        </kobber-badge-icon>
        <kobber-text-body color="${ifDefined(args.color)}" color-variant="${args.colorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. (${args.color})</kobber-text-body>
      </kobber-text-module>
  `;
};

export const TextModule: Story = {
  argTypes: {
    colorVariant: {
      options: textModuleColorVariants,
      control: { type: "inline-radio" },
    },
  },
  args: {
    colorVariant: textModuleColorVariants[0],
  },
  render: args => html`
    <kobber-text-module color="${args.color}" color-variant="${args.colorVariant}">
    ${
      !args.showBadge
        ? ""
        : html`
      <kobber-badge-icon slot="badge" color-theme="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
        <kobber-pencil slot="icon"></kobber-pencil>
        Badge text
      </kobber-badge-icon>`
    }

      ${
        !args.showHeading
          ? ""
          : html`<kobber-heading slot="heading" color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">Heading</kobber-heading>`
      }

      <kobber-text-block>
        <kobber-title slot="title" color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}" size="large">Title L</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. (${args.color})</kobber-text-body>
      </kobber-text-block>
      ${args.showNested ? nestedTextModule(args) : ""}
      <kobber-text-block>
        <kobber-title slot="title" color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">Body text here. (${args.color})</kobber-text-body>
      </kobber-text-block>
    </kobber-text-module>
  `,
};

export const ContentWrapper: Story = {
  argTypes: {
    colorVariant: {
      options: contentWrapperColorVariants,
      control: { type: "inline-radio" },
    },
    type: {
      options: contentWrapperTypes,
      control: { type: "inline-radio" },
    },
    showBadge: {
      name: "Top Block: Show Badge",
    },
    showHeading: {
      name: "Top Block: Show Heading",
    },
    showHeadingText: {
      name: "Top Block: Show Text",
    },
  },
  args: {
    colorVariant: contentWrapperColorVariants[0],
    type: "overlay",
    showHeadingText: true,
    maxHeightInPx: 600,
  },
  render: args => html`
    <kobber-content-wrapper 
      color-variant="${args.colorVariant}" 
      type=${args.type}
      max-height-in-px="${args.maxHeightInPx}"
    >
      <kobber-content-top-block slot="content-top-block">
        ${
          !args.showBadge
            ? ""
            : html`
        <kobber-badge-icon color-theme="${mappedColor(args)}" color-variant="${args.colorVariant}">
          <kobber-pencil slot="icon"></kobber-pencil>
          Content Wrapper
        </kobber-badge-icon>
          `
        }
      ${
        !args.showHeading
          ? ""
          : html`   <kobber-heading color="${mappedColor(args)}" color-variant="${args.colorVariant}">Heading</kobber-heading>`
      }
      ${
        !args.showHeadingText
          ? ""
          : html`   <kobber-text-body color="${mappedColor(args)}" color-variant="${args.colorVariant}">Heading text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing el it. </kobber-text-body>
          `
      }
      </kobber-content-top-block>

      <kobber-text-block>
        <kobber-title color="${mappedColor(args)}" color-variant="${args.colorVariant}" size="large">Title L</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${args.colorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. (${args.color})</kobber-text-body>
      </kobber-text-block>
      ${args.showNested ? nestedTextModule(args) : ""}
      <kobber-text-block>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${args.colorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it.</kobber-text-body>
      </kobber-text-block>

      <kobber-text-block>
        <kobber-title color="${mappedColor(args)}" color-variant="${args.colorVariant}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${args.colorVariant}">Body text here.</kobber-text-body>
      </kobber-text-block>
    </kobber-content-wrapper>
  `,
};
