import type { Meta, StoryObj } from "@storybook/web-components";
import "./Button";

const meta: Meta = {
  component: "kobber-button",
};

export default meta;
type Story = StoryObj;

export const Button: Story = {
  args: {
    text: "Button text",
  },
};
