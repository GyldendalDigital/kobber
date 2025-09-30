import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./BadgeIcon";
import {
  type BadgeIconProps,
  badgeIconColorThemes,
  badgeIconColorVariants,
  badgeIconName,
  badgeIconSizes,
} from "./BadgeIcon.core";
import "@gyldendal/kobber-icons/web-components";
import "../theme-context-provider/ThemeContext";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { init as initComponents } from "../base/init";
import { ifDefined } from "lit/directives/if-defined.js";

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
    colorTheme: {
      options: badgeIconColorThemes,
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
    colorTheme: "brand",
    colorVariant: "tone-a",
  },
  render: args => {
    return html`${renderBadgeIcon(args)}`;
  },
};

const renderBadgeIcon = (args: Args) => {
  const { size, text, colorTheme, colorVariant } = args;

  return html` <kobber-badge-icon
    size=${ifDefined(size)}
    color-theme=${ifDefined(colorTheme)}
    color-variant=${ifDefined(colorVariant)}
  >
    <kobber-pin slot="icon"></kobber-pin>
    ${text}
  </kobber-badge-icon>`;
};
