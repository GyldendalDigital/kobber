import type { Meta, StoryObj } from "@storybook/web-components";
import { customElementName } from "./Badge";

const types = ["subject", "category"];
const colors = ["#0093d2", "#f49900", "#76b72a"];

const meta: Meta = {
  component: customElementName,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: colors,
      control: { type: "select" },
    },
    type: {
      options: types,
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Badge: Story = {
  args: {
    text: "Badge text",
    color: colors[0],
    type: types[0],
  },
  render: args => `
    <${customElementName} color=${args.color} type=${args.type}>${args.text}</${customElementName}>
  `,
};

export const Badges: Story = {
  args: {
    text: "Badge text",
    color: colors[0],
    type: types[0],
  },
  render: args => `
    <div style="display: grid; gap: 10px; grid-template-columns: repeat(3, 1fr);">
      ${types
        .map(type =>
          colors
            .map(color => `<${customElementName} color=${color} type=${type}>${args.text}</${customElementName}>`)
            .join(""),
        )
        .join("")}
    </div>
  `,
};
