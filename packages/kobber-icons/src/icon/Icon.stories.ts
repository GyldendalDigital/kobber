import type { Meta, StoryObj } from "@storybook/web-components";
import "@gyldendal/kobber-base/themes/default/tokens.css";
import "./Icon";
import { icons } from "@gyldendal/kobber-icons/symbols/kobber-icons-lists";

const meta: Meta = {
  component: "kobber-icon",
  tags: ["autodocs"],
  decorators: [
    (Story, context) => `
    <kobber-theme-context theme-id=${context.globals.theme}>
      ${Story()}
    </kobber-theme-context>
    `,
  ],
  argTypes: {
    type: {
      options: icons,
      control: "select",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Icon: Story = {
  args: {
    type: "heart",
  },
  render: args => `<kobber-icon type="${args.type}" />`,
};
