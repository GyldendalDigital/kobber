import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./BadgeIcon";
import { badgeIconName, BadgeIconProps, badgeIconSizes, badgeIconThemes, badgeIconVariants } from "./BadgeIcon.core";
import "@gyldendal/kobber-icons/web-components";
import "../utils/theme-context";

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
    theme: {
      options: badgeIconThemes,
      control: { type: "select" },
    },
    variant: {
      options: badgeIconVariants,
      control: { type: "select" },
    },
  },
  args: {
    text: "Badge Icon",
    size: "medium",
    theme: "aubergine",
    variant: "main",
  },
  render: args => {
    return html`${renderBadgeIcon(args)}`;
  },
};

const renderBadgeIcon = (args: Args) => {
  const { size, text, theme, variant } = args;

  return html` <kobber-badge-icon size=${size} theme=${theme} variant=${variant}>
    <kobber-arrow_right slot="icon"></kobber-arrow_right>
    <span slot="text">${text}</span>
  </kobber-badge-icon>`;
};
