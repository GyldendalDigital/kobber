import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { type DividerVariant as DividerColorVariant, dividerVariants } from "./Divider.core";
import "./Divider";
import { html } from "lit";
import "../theme-context-provider/ThemeContext";
import { init as initComponents } from "../base/init";

initComponents();

const colorVariants: DividerColorVariant[] = dividerVariants;

const meta: Meta = {
  title: "Styles and Foundation/Divider",
  component: "kobber-divider",
  argTypes: {
    colorVariant: {
      options: colorVariants,
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const Divider: Story = {
  args: {
    colorVariant: colorVariants[0],
  },
  render: args =>
    html`<div style="height:10px; width:200px;">
      <kobber-divider color-variant="${args.colorVariant}"></kobber-divider>
    </div>`,
};
