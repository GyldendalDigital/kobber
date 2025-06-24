import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Badge";
import { badgeName, BadgeProps, badgeSizes, badgeThemes, badgeVariants } from "./Badge.core";
import "../theme-context-provider/ThemeContext";
import { init as initComponents } from "../base/init";

initComponents();

interface Args extends BadgeProps {
  text?: string;
}

const meta: Meta = {
  title: "Badge",
  component: badgeName,
  decorators: [
    (Story, context) => html`<kobber-theme-context theme-id=${context.globals.theme}>${Story()}</kobber-theme-context>`,
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Badge: StoryObj<Args> = {
  argTypes: {
    size: {
      options: badgeSizes,
      control: { type: "select" },
    },
    theme: {
      options: badgeThemes,
      control: { type: "select" },
    },
    variant: {
      options: badgeVariants,
      control: { type: "select" },
    },
    showStatusCircle: {
      control: { type: "boolean" },
    },
  },
  args: {
    text: "Badge",
    size: "medium",
    theme: "aubergine",
    variant: "main",
    showStatusCircle: true,
  },
  render: args => {
    return html`${renderBadge(args)}`;
  },
};

const renderBadge = (args: Args) => {
  const { size, text, theme, variant, showStatusCircle } = args;

  return html` <kobber-badge size=${size} theme=${theme} variant=${variant} ?showStatusCircle=${showStatusCircle}>
    ${text}
  </kobber-badge>`;
};
