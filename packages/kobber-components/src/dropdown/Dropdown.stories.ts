import type { Meta, StoryObj } from "@storybook/web-components";
import "./Dropdown";

const meta: Meta = {
  title: "In development 🧪/Dropdown",
  component: "kobber-dropdown",
};

export default meta;
type Story = StoryObj;

export const Dropdown: Story = {
  args: {
    text: "Dropdown text",
  },
};
