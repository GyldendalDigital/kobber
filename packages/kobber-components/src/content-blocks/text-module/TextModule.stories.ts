import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import { textModuleColors, textModuleColorVariants } from "./TextModule.core";
import "./TextModule";
import "../components/text-block/TextBlock";
import "../../text/heading/Heading";
import "../../text/title/Title";
import "../../text/text-body/TextBody";
import { html } from "lit";
import "../../theme-context-provider/ThemeContext";
import "@gyldendal/kobber-icons/web-components";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { ifDefined } from "lit/directives/if-defined.js";
import { BadgeIcon } from "../../badge-icon/BadgeIcon.stories";
import { init as initComponents } from "../../base/init";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import { mappedColor } from "../../story/snippets";
import { TextList } from "../../text/Text.stories";

initComponents();
initIcons();

const meta: Meta = {
  title: "Content Blocks/Text Module",
  argTypes: {
    ...BadgeIcon.argTypes,
    color: {
      options: textModuleColors,
      control: { type: "inline-radio" },
    },
    showBadge: {
      table: {
        category: "Badge Icon",
      },
    },
  },
  args: {
    ...BadgeIcon.args,
    color: textModuleColors[0],
    showBadge: true,
    showHeading: true,
    showList: true,
    showNested: false,
  },
  parameters: {
    controls: {
      include: /^(?!.*(icon|slotToInsertInto)).*/g,
    },
  },
};

export default meta;
type Story = StoryObj;

const nestedTextModule = (args: Args) => {
  return html`
      <kobber-text-module color="${ifDefined(args.color)}" color-variant="${invertColorVariant(args.colorVariant)}">
      ${BadgeIcon.render?.({ ...args, icon: "kobber-alarm_bell" }, {} as any) ?? ""}
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
        : (BadgeIcon.render?.(
            {
              ...args,
              icon: "kobber-pencil",
              colorVariant: invertColorVariant(args.colorVariant),
            },
            {} as any,
          ) ?? "")
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
      ${args.showList ? (TextList.render?.({ ...args, colorVariant: invertColorVariant(args.colorVariant) }, {} as any) ?? "") : ""}
      <kobber-text-block>
        <kobber-title slot="title" color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}" size="medium">Title M</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">Body text here. (${args.color})</kobber-text-body>
      </kobber-text-block>
    </kobber-text-module>
  `,
};
