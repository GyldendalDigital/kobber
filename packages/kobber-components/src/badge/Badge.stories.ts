import type { Meta, StoryObj } from "@storybook/web-components";
import { badgeName } from "./Badge"

const types = ["subject", "category"];
const colors = ["#0093d2", "#f49900", "#76b72a"]

const meta: Meta = {
  component: badgeName,
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
  render: (args) => `
    <${badgeName} color=${args.color} type=${args.type}>${args.text}</${badgeName}>
  `,
};

export const Badges: Story = {
  args: {
    text: "Badge text",
    color: colors[0],
    type: types[0],
  },
  render: (args) => `
    <div style="display: grid; gap: 10px; grid-template-columns: repeat(3, 1fr);">
      ${types.map(type => colors.map(color =>
    `<${badgeName} color=${color} type=${type}>${args.text}</${badgeName}>`)
    .join("")).join("")}
    </div>
  `,
};