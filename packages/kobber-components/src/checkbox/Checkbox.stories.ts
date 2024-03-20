import type { Meta, StoryObj } from "@storybook/web-components";
import "./Checkbox";
import { html } from "lit";

const meta: Meta = {
  component: "kobber-checkbox",
  tags: ["autodocs"],
  argTypes: {},
  // decorators: [
  //   (Story, context) => `
  //   <kobber-theme-context theme-id=${context.globals.theme}>
  //     ${Story()}
  //   </kobber-theme-context>
  //   `,
  // ],
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
        <kobber-checkbox label="Checkbox"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </kobber-checkbox>
        <kobber-checkbox onclick="handleClick(this);">Unchecked</kobber-checkbox>
        <kobber-checkbox checked>Checked</kobber-checkbox>
        <kobber-checkbox id="cb-indetarminate" indetarminate>Indeterminate</kobber-checkbox>
        <kobber-checkbox disabled>Disabled</kobber-checkbox>
        <kobber-checkbox disabled checked>Checked + Disabled</kobber-checkbox>
        <kobber-checkbox disabled id="cb-indetarminate-2">Indeterminate + Disabled</kobber-checkbox>
      </fieldset>
    </div>
    <script>
      document.getElementById("cb-indetarminate").indeterminate = true;
      document.getElementById("cb-indetarminate-2").indeterminate = true;
    </script>
  `,
};
