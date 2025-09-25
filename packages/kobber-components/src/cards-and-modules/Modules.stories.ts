import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import { textModuleColors, textModuleColorVariants } from "./text-module/TextModule.core";
import "./text-module/TextModule";
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
