import type { Meta, StoryObj } from "@storybook/web-components";
import "./Dropdown";

const meta: Meta = {
  component: "kobber-dropdown",
};

export default meta;
type Story = StoryObj;

export const Dropdown: Story = {
  args: {
    text: "Dropdown text",
  },
};
