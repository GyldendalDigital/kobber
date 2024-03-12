import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  component: "kobber-button",
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["default", "info", "positive", "negative"],
      control: { type: "select" },
    },
    level: {
      options: ["primary", "secondary", "ghost"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story, context) => `
    <kobber-theme-context theme-id=${context.globals.theme}>
      ${Story()}
    </kobber-theme-context>
    `
  ],
};

export default meta;
type Story = StoryObj;

export const Button: Story = {
  args: {
    text: "Button text",
    color: "default",
    level: "primary",
  },
  render: (args) => `
    <kobber-button color=${args.color} level=${args.level}>${args.text}</kobber-button>
  `,
};


export const InfoButton: Story = {
  args: {
    text: "Button text",
    color: "info",
    level: "primary",
  },
  render: (args) => `
    <kobber-button color=${args.color} level=${args.level}>${args.text}</kobber-button>
  `,
};

export const DisabledButton: Story = {
  args: {
    text: "Button text",
    color: "default",
    level: "primary",
  },
  render: (args) => `
    <kobber-button color=${args.color} level=${args.level} disabled>${args.text}</kobber-button>
  `,
};
