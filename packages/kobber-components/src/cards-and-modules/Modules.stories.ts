import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import { textModuleColors, textModuleColorVariants } from "./text-module/TextModule.core";
import "./text-module/TextModule";
import "./components/text-block/TextBlock";
import "./components/content-top-block/ContentTopBlock";
import "./content-wrapper/ContentWrapper";
import "../badge-icon/BadgeIcon";
import "../text/heading/Heading";
import "../text/lead/Lead";
import "../text/title/Title";
import "../text/text-body/TextBody";
import { html } from "lit";
import "../theme-context-provider/ThemeContext";
import "@gyldendal/kobber-icons/web-components";
import { init as initComponents } from "../base/init";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { ifDefined } from "lit/directives/if-defined.js";
import { contentWrapperTypes } from "./content-wrapper/ContentWrapper.core";

initComponents();
initIcons();

const meta: Meta = {};

export default meta;
type Story = StoryObj;

const mappedTextColor = (args: Args) => {
  if (args.textModuleColor === "transparent") {
    return "neutral";
  }
  return args.textModuleColor;
};

const mappedTextColorVariant = (args: Args) => {
  if (args.textModuleColorVariant === "tone-a") {
    return "tone-b";
  }
  return "tone-a";
};

const nestedTextModule = (args: Args) => {
  const color = (args: Args) => {
    const nextColorIndex = textModuleColors.indexOf(args.textModuleColor) + 1;
    if (nextColorIndex < textModuleColors.length) {
      return textModuleColors[nextColorIndex];
    }
    return textModuleColors[0];
  };

  return html`
      <kobber-text-module color="${ifDefined(color(args))}" color-variant="${args.textModuleColorVariant}">
        <kobber-badge-icon slot="badge" color-theme="${color(args)}" color-variant="${mappedTextColorVariant(args)}">
          <kobber-pencil slot="icon"></kobber-pencil>
          Visste du?
        </kobber-badge-icon>
        <kobber-text-body color="${color(args)}" color-variant="${mappedTextColorVariant(args)}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. (${color(args)})</kobber-text-body>
      </kobber-text-module>
  `;
};

export const TextModule: Story = {
  argTypes: {
    textModuleColor: {
      options: textModuleColors,
      control: { type: "inline-radio" },
    },
    textModuleColorVariant: {
      options: textModuleColorVariants,
      control: { type: "inline-radio" },
    },
  },
  args: {
    textModuleColor: textModuleColors[0],
    textModuleColorVariant: textModuleColorVariants[0],
    showBadge: true,
    showHeading: true,
    showNested: false,
  },
  render: args => html`
    <kobber-text-module color="${args.textModuleColor}" color-variant="${args.textModuleColorVariant}">
    ${
      !args.showBadge
        ? ""
        : html`
      <kobber-badge-icon slot="badge" color-theme="${mappedTextColor(args)}" color-variant="${mappedTextColorVariant(args)}">
        <kobber-pencil slot="icon"></kobber-pencil>
        Badge text
      </kobber-badge-icon>`
    }

      ${
        !args.showHeading
          ? ""
          : html`<kobber-heading slot="heading" color="${mappedTextColor(args)}" color-variant="${mappedTextColorVariant(args)}">Heading</kobber-heading>`
      }

      <kobber-text-block>
        <kobber-title slot="title" color="${mappedTextColor(args)}" color-variant="${mappedTextColorVariant(args)}" size="large">Title L</kobber-title>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${mappedTextColorVariant(args)}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. (${args.textModuleColor})</kobber-text-body>
      </kobber-text-block>
      ${args.showNested ? nestedTextModule(args) : ""}
      <kobber-text-block>
        <kobber-title slot="title" color="${mappedTextColor(args)}" color-variant="${mappedTextColorVariant(args)}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${mappedTextColorVariant(args)}">Body text here. (${args.textModuleColor})</kobber-text-body>
      </kobber-text-block>
    </kobber-text-module>
  `,
};

export const ContentWrapper: Story = {
  argTypes: {
    type: {
      options: contentWrapperTypes,
      control: { type: "inline-radio" },
    },
    textModuleColor: {
      options: textModuleColors,
      control: { type: "inline-radio" },
    },
    textModuleColorVariant: {
      options: textModuleColorVariants,
      control: { type: "inline-radio" },
    },
    showBadge: {
      name: "Top Block: Show Badge",
    },
    showHeading: {
      name: "Top Block: Show Heading",
    },
    showHeadingLead: {
      name: "Top Block: Show Lead",
    },
    showHeadingText: {
      name: "Top Block: Show Text",
    },
  },
  args: {
    type: "overlay",
    textModuleColor: textModuleColors[0],
    textModuleColorVariant: textModuleColorVariants[0],
    showBadge: true,
    showHeading: true,
    showHeadingLead: true,
    showHeadingText: true,
    showNested: true,
    maxHeightInPx: 600,
  },
  render: args => html`
    <kobber-content-wrapper 
      color-variant="${args.textModuleColorVariant}" 
      type=${args.type}
      max-height-in-px="${args.maxHeightInPx}"
    >
      <kobber-content-top-block slot="content-top-block">
        ${
          !args.showBadge
            ? ""
            : html`
        <kobber-badge-icon color-theme="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">
          <kobber-pencil slot="icon"></kobber-pencil>
          Content Wrapper
        </kobber-badge-icon>
          `
        }
      ${
        !args.showHeading
          ? ""
          : html`   <kobber-heading color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Heading</kobber-heading>`
      }
      ${
        !args.showHeadingLead
          ? ""
          : html`   <kobber-lead color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Lead (ingress)</kobber-lead>`
      }
      ${
        !args.showHeadingText
          ? ""
          : html`   <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Heading text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing el it. </kobber-text-body>
          `
      }
      </kobber-content-top-block>

      <kobber-text-block>
        <kobber-title color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}" size="large">Title L</kobber-title>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. (${args.textModuleColor})</kobber-text-body>
      </kobber-text-block>
      ${args.showNested ? nestedTextModule(args) : ""}
      <kobber-text-block>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it.</kobber-text-body>
      </kobber-text-block>

      <kobber-text-block>
        <kobber-title color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Body text here.</kobber-text-body>
      </kobber-text-block>
    </kobber-content-wrapper>
  `,
};
