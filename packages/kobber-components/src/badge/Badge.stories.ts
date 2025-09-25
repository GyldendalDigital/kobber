import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./Badge";
import {
  type BadgeProps,
  badgeColorThemes,
  badgeColorVariants,
  badgeName,
  badgeSizes,
} from "./Badge.core";
import "../theme-context-provider/ThemeContext";
import { ifDefined } from "lit/directives/if-defined.js";
import { init as initComponents } from "../base/init";

initComponents();

interface Args extends BadgeProps {
  text?: string;
}

const meta: Meta<Args> = {
  title: "Indicators/Badge",
  component: badgeName,
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
    colorTheme: {
      options: badgeColorThemes,
      control: { type: "select" },
    },
    colorVariant: {
      options: badgeColorVariants,
      control: { type: "select" },
    },
    showStatusCircle: {
      control: { type: "boolean" },
      name: "Show status circle (only for supplemental variant of aubergine and rettsdata thems)",
    },
  },
  args: {
    text: "Badge",
    size: "medium",
    colorTheme: "aubergine",
    colorVariant: "main",
    showStatusCircle: true,
  },
  render: args => {
    return html`${renderBadge(args)}`;
  },
};

const renderBadge = (args: Args) => {
  const { size, text, colorTheme, colorVariant, showStatusCircle } = args;

  return html`<kobber-badge
    size=${size}
    color-theme=${colorTheme}
    color-variant=${colorVariant}
    show-status-circle=${ifDefined(showStatusCircle ? "true" : undefined)}
  >
    ${text}
  </kobber-badge>`;
};
