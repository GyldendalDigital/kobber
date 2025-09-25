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
      control: { type: "select" },
    },
    colorTheme: {
      options: badgeIconColorThemes,
      control: { type: "select" },
    },
    colorVariant: {
      options: badgeIconColorVariants,
      control: { type: "select" },
    },
  },
  args: {
    text: "Badge Icon",
    size: "medium",
    colorTheme: "aubergine",
    colorVariant: "main",
  },
  render: args => {
    return html`${renderBadgeIcon(args)}`;
  },
};

const renderBadgeIcon = (args: Args) => {
  const { size, text, colorTheme, colorVariant } = args;

  return html` <kobber-badge-icon
    size=${size}
    color-theme=${colorTheme}
    color-variant=${colorVariant}
  >
    <kobber-pin slot="icon"></kobber-pin>
    <span>${text}</span>
  </kobber-badge-icon>`;
};
