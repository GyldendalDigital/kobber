import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, unsafeStatic } from "lit/static-html.js";
import "./BadgeIcon";
import {
  type BadgeIconProps,
  badgeIconColors,
  badgeIconColorVariants,
  badgeIconName,
  badgeIconSizes,
} from "./BadgeIcon.core";
import "@gyldendal/kobber-icons/web-components";
import "../theme-context-provider/ThemeContext";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { iconsList } from "@gyldendal/kobber-icons/symbols/kobber-icons-lists.ts";
import type { IconType } from "@gyldendal/kobber-icons/symbols/kobber-icons-types.ts";
import { ifDefined } from "lit/directives/if-defined.js";
import { init as initComponents } from "../base/init";

initComponents();
initIcons();

interface Args extends BadgeIconProps {
  icon?: IconType;
  badgeIconText?: string;
  slotToInsertInto?: string;
}

const meta: Meta<Args> = {
  title: "Indicators/Badge Icon",
  component: badgeIconName,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      options: badgeIconColors,
      control: { type: "inline-radio" },
      table: {
        category: "Badge Icon",
      },
    },
    colorVariant: {
      options: badgeIconColorVariants,
      control: { type: "inline-radio" },
      table: {
        category: "Badge Icon",
      },
    },
  },
  args: {
    color: "brand",
    colorVariant: "tone-a",
  },
};

export default meta;

export const BadgeIcon: StoryObj<Args> = {
  argTypes: {
    icon: {
      options: iconsList,
      control: { type: "select" },
      table: {
        category: "Badge Icon",
      },
    },
    size: {
      options: badgeIconSizes,
      control: { type: "inline-radio" },
      table: {
        category: "Badge Icon",
      },
    },
    slotToInsertInto: {
      table: {
        category: "Badge Icon",
      },
    },
    badgeIconText: {
      table: {
        category: "Badge Icon",
      },
    },
  },
  args: {
    badgeIconText: "Badge Icon",
    size: "medium",
    icon: "kobber-pin",
    slotToInsertInto: "badge",
  },
  render: args => {
    return html` <kobber-badge-icon
    size=${ifDefined(args.size)}
    color=${ifDefined(args.color)}
    color-variant=${ifDefined(args.colorVariant)}
    slot=${ifDefined(args.slotToInsertInto)}
  >
    <${unsafeStatic(args.icon ?? "")} slot='icon'></${unsafeStatic(args.icon ?? "")}>
    ${args.badgeIconText}
  </kobber-badge-icon>`;
  },
};
