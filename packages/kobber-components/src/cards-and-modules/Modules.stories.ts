import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import { textModuleColors, textModuleColorVariants } from "./text-module/TextModule.core";
import "./text-module/TextModule";
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

initComponents();
initIcons();

const meta: Meta = {
  decorators: [
    (Story, context) => html`
<kobber-theme-context theme-id=${context.globals.theme}> ${Story()} </kobber-theme-context>
    `,
  ],
};

export default meta;
type Story = StoryObj;

const mappedBadgeColor = (args: Args) => {
  if (args.textModuleColor === "brand") {
    return "aubergine";
  }
  if (args.textModuleColor === "neutral" || args.textModuleColor === "transparent") {
    return "concrete";
  }
  return args.textModuleColor;
};

const mappedBadgeColorVariant = (args: Args) => {
  if (args.textModuleColorVariant === "tone-a") {
    return "main";
  }
  return "supplemental";
};

const mappedTextColor = (args: Args) => {
  if (args.textModuleColor === "transparent") {
    return "neutral";
  }
  return args.textModuleColor;
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
        <kobber-badge-icon slot="badge" color-theme="vacation" color-variant="${mappedBadgeColorVariant(args)}">
          <kobber-pencil slot="icon"></kobber-pencil>
          Visste du?
        </kobber-badge-icon>
        <kobber-text-body color-variant="${args.textModuleColorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. (${color(args)})</kobber-text-body>
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
      <kobber-badge-icon slot="badge" color-theme="${mappedBadgeColor(args)}" color-variant="${mappedBadgeColorVariant(args)}">
        <kobber-pencil slot="icon"></kobber-pencil>
        Badge text
      </kobber-badge-icon>`
    }

      ${
        !args.showHeading
          ? ""
          : html`<kobber-heading slot="heading" color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Heading</kobber-heading>`
      }

      <div>
        <kobber-title color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}" size="large">Title L</kobber-title>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. (${args.textModuleColor})</kobber-text-body>
      </div>
      ${args.showNested ? nestedTextModule(args) : ""}
      <div>
        <kobber-title color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Body text here. (${args.textModuleColor})</kobber-text-body>
      </div>
    </kobber-text-module>
  `,
};

export const ContentWrapper: Story = {
  argTypes: {
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
    textModuleColor: textModuleColors[5],
    textModuleColorVariant: textModuleColorVariants[0],
    showBadge: true,
    showHeading: true,
    showHeadingLead: true,
    showHeadingText: true,
    showNested: true,
    fullWidth: false,
    maxHeightInPx: 600,
  },
  render: args => html`
    <kobber-content-wrapper 
      color="${args.textModuleColor}"
      color-variant="${args.textModuleColorVariant}" 
      ?full-width=${args.fullWidth}
      max-height-in-px="${args.maxHeightInPx}"
    >
      ${
        !args.showBadge
          ? ""
          : html`
      <kobber-badge-icon slot="badge" color-theme="${mappedBadgeColor(args)}" color-variant="${mappedBadgeColorVariant(args)}">
        <kobber-pencil slot="icon"></kobber-pencil>
        Content Wrapper
      </kobber-badge-icon>
          `
      }
      ${
        !args.showHeading
          ? ""
          : html`<kobber-heading slot="heading" color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Heading</kobber-heading>`
      }
      ${
        !args.showHeadingLead
          ? ""
          : html`<kobber-lead slot="heading-lead" color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Lead (ingress)</kobber-lead>`
      }
      ${
        !args.showHeadingText
          ? ""
          : html`<kobber-text-body slot="heading-text" color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Heading text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing el it. </kobber-text-body>
          `
      }
      <div>
        <kobber-title color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}" size="large">Title L</kobber-title>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. (${args.textModuleColor})</kobber-text-body>
      </div>
      ${args.showNested ? nestedTextModule(args) : ""}
      <div>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it.</kobber-text-body>
      </div>

      <div>
        <kobber-title color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedTextColor(args)}" color-variant="${args.textModuleColorVariant}">Body text here.</kobber-text-body>
      </div>
    </kobber-content-wrapper>
  `,
};
