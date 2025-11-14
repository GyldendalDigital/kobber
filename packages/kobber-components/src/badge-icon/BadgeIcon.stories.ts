import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
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
import { ifDefined } from "lit/directives/if-defined.js";
import { init as initComponents } from "../base/init";

initComponents();
initIcons();

interface Args extends BadgeIconProps {
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

export const BadgeIcons: StoryObj<Args> = {
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
  },
  args: {
    text: "Badge Icon",
    size: "medium",
    color: "brand",
    colorVariant: "tone-a",
  },
  render: args => {
    return html`${renderBadgeIcon(args)}`;
  },
};

const renderBadgeIcon = (args: Args) => {
  const { size, text, color, colorVariant } = args;

  return html` <kobber-badge-icon
    size=${ifDefined(size)}
    color=${ifDefined(color)}
    color-variant=${ifDefined(colorVariant)}
  >
    <kobber-pin slot="icon"></kobber-pin>
    ${text}
  </kobber-badge-icon>`;
};
