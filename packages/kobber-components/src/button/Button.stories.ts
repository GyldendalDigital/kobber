import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  component: "kobber-button",
  // tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["default", "info"],
      control: { type: "select" },
    },
    level: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  }
};

export default meta;
type Story = StoryObj;

export const Button: Story = {
  args: {
    text: "Button text",
    color: "default",
    level: "primary",
  },
  render: (args, context) => `<kobber-button class=${context.globals.theme} color=${args.color} level=${args.level}>${args.text}</kobber-button>`,
};
