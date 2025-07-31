import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { DividerVariant } from "./Divider.core";
import "./Divider";
import { html } from "lit";
import "../theme-context-provider/ThemeContext";
import { init as initComponents } from "../base/init";

initComponents();

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
