import type { Meta, StoryObj } from "@storybook/web-components";
import "../radio/Radio";
import { html } from "lit";

const meta: Meta = {
  component: "kobber-radio",
};

export default meta;
type Story = StoryObj;

export const Radio: Story = {
  args: {
    text: "",
  },
  render: () => {
    return html`
      <form @submit="${() => false}">
        <kobber-radio-group>
            <kobber-radio value="1" checked>1</kobber-radio>
            <kobber-radio value="2">2</kobber-radio>
            <kobber-radio value="3">3</kobber-radio>
            <kobber-radio value="4" disabled>Disabled</kobber-radio>
        <kobber-radio-group>
      </form>
  `;
  },
};
