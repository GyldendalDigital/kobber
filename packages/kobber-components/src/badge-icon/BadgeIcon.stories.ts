import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./BadgeIcon";
import { badgeIconName, BadgeIconProps, badgeIconSizes, badgeIconThemes, badgeIconVariants } from "./BadgeIcon.core";

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
    disabled: false,
  },
  render: args => {
    return html`
      <div style="background-color: #e3e3e3; height:200px; width:400px; padding: 10px; border-radius: 5px;">
        ${renderBadgeIcon(args)}
      </div>
    `;
  },
};

const renderBadgeIcon = (args: Args) => {
  const { size, text, theme, variant, disabled } = args;

  return html` <kobber-badge-icon
    size=${size}
    theme=${theme}
    variant=${variant}
    aria-label="Hello world"
    disabled=${disabled}
  >
    ${text}
  </kobber-badge-icon>`;
};
