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
      control: { type: "inline-radio" },
    },
    colorTheme: {
      options: badgeColorThemes,
      control: { type: "inline-radio" },
    },
    colorVariant: {
      name: "Color Variant (neutral exists only in tone b)",
      options: badgeColorVariants,
      control: { type: "inline-radio" },
    },
    showStatusCircle: {
      control: { type: "boolean" },
      name: "Show status circle (only for tone-a variant of brand theme, and tone-b variant of rettsdata theme)",
    },
  },
  args: {
    text: "Badge",
    size: "medium",
    colorTheme: "brand",
    colorVariant: "tone-a",
    showStatusCircle: true,
  },
  render: args => {
    return html`${renderBadge(args)}`;
  },
};

const renderBadge = (args: Args) => {
  const { size, text, colorTheme, colorVariant, showStatusCircle } = args;

  return html`<kobber-badge
    size=${ifDefined(size)}
    color-theme=${ifDefined(colorTheme)}
    color-variant=${ifDefined(colorVariant)}
    ?show-status-circle=${showStatusCircle}
  >
    ${text}
  </kobber-badge>`;
};
