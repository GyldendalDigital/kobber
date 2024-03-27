import type { Meta, StoryObj } from "@storybook/web-components";
import "./Checkbox";
import { html } from "lit";

const meta: Meta = {
  component: "kobber-checkbox",
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Checkbox: Story = {
  args: {},
  render: (_, context) => html`
    <!-- <link rel="stylesheet" href="/themes/light.css" /> -->
    <div class="${context.globals?.theme}" style="display: flex; flex-direction: column; gap: 10px; min-width: 30vw;">
      <fieldset style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
        <legend>Test-checkbox</legend>
        <kobber-checkbox>Unchecked</kobber-checkbox>
        <kobber-checkbox checked>Checked</kobber-checkbox>
        <kobber-checkbox id="cb-indeterminate" indeterminate>Indeterminate</kobber-checkbox>
        <kobber-checkbox disabled>Disabled</kobber-checkbox>
        <kobber-checkbox disabled checked>Checked + Disabled</kobber-checkbox>
        <kobber-checkbox disabled id="cb-indeterminate-2">Indeterminate + Disabled</kobber-checkbox>
      </fieldset>
      </fieldset>
    </div>
    <script>
      document.getElementById("cb-indeterminate").indeterminate = true;
      document.getElementById("cb-indeterminate-2").indeterminate = true;
    </script>
  `,
};
