import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./BadgeIcon";
import {
  badgeIconName,
  BadgeIconProps,
  badgeIconSizes,
  badgeIconColorThemes,
  badgeIconColorVariants,
} from "./BadgeIcon.core";
import "@gyldendal/kobber-icons/web-components";
import "../theme-context-provider/ThemeContext";
import { init as initComponents } from "../base/init";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { ifDefined } from "lit/directives/if-defined.js";

initComponents();
initIcons();

interface Args extends BadgeIconProps {
  text?: string;
}

const meta: Meta = {
  title: "Badge Icon",
  component: badgeIconName,
  decorators: [
    (Story, context) => html`<kobber-theme-context theme-id=${context.globals.theme}>${Story()}</kobber-theme-context>`,
  ],
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
    size=${ifDefined(size)}
    color-theme=${ifDefined(colorTheme)}
    color-variant=${ifDefined(colorVariant)}
  >
    <kobber-arrow_right slot="icon"></kobber-arrow_right>
    <span slot="text">${text}</span>
  </kobber-badge-icon>`;
};
