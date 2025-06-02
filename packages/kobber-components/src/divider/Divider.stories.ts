import type { Meta, StoryObj } from "@storybook/web-components";
import { DividerVariant } from "./Divider.types";
import "./Divider";
import { html } from "lit";
import "../theme-context-provider/ThemeContext";

const variants: DividerVariant[] = ["main", "supplemental"];

const meta: Meta = {
  component: "kobber-divider",
  argTypes: {
    variant: {
      options: variants,
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => html`
      <kobber-theme-context theme-id=${context.globals.theme}> ${Story()} </kobber-theme-context>
    `,
  ],
};

export default meta;
type Story = StoryObj;

export const Divider: Story = {
  args: {
    variant: variants[0],
  },
  render: args =>
    html`<div style="height:10px; width:200px;">
      <kobber-divider variant="${args.variant}"></kobber-divider>
    </div>`,
};
