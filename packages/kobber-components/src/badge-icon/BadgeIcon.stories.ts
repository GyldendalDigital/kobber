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
  text?: string;
}

const meta: Meta<Args> = {
  title: "Indicators/Badge Icon",
  component: badgeIconName,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const BadgeIcon: StoryObj<Args> = {
  argTypes: {
    size: {
      options: badgeIconSizes,
      control: { type: "inline-radio" },
    },
    color: {
      options: badgeIconColors,
      control: { type: "inline-radio" },
    },
    colorVariant: {
      options: badgeIconColorVariants,
      control: { type: "inline-radio" },
    },
    icon: {
      options: iconsList,
      control: { type: "select" },
    },
  },
  args: {
    text: "Badge Icon",
    size: "medium",
    color: "brand",
    colorVariant: "tone-a",
    icon: "kobber-pin",
  },
  render: args => {
    return html` <kobber-badge-icon
    size=${ifDefined(args.size)}
    color=${ifDefined(args.color)}
    color-variant=${ifDefined(args.colorVariant)}
  >
    <${unsafeStatic(args.icon ?? "")} slot='icon'></${unsafeStatic(args.icon ?? "")}>
    ${args.text}
  </kobber-badge-icon>`;
  },
};
