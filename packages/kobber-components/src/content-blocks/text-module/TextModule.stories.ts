import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { textModuleColors, textModuleColorVariants } from "./TextModule.core";
import "./TextModule";
import "../components/text-block/TextBlock";
import "../../badge-icon/BadgeIcon";
import "../../text/heading/Heading";
import "../../text/title/Title";
import "../../text/text-body/TextBody";
import { html } from "lit";
import "../../theme-context-provider/ThemeContext";
import "@gyldendal/kobber-icons/web-components";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { init as initComponents } from "../../base/init";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import { mappedColor, nestedList, nestedTextModule } from "../../story/snippets";

initComponents();
initIcons();

const meta: Meta = {
  title: "Content Blocks/Text Module",
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
    showList: true,
    showNested: false,
  },
};

export default meta;
type Story = StoryObj;

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
      <kobber-badge-icon slot="badge" color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
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
      ${args.showList ? nestedList(args) : ""}
      <kobber-text-block>
        <kobber-title slot="title" color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">Body text here. (${args.color})</kobber-text-body>
      </kobber-text-block>
    </kobber-text-module>
  `,
};
