import type { Meta, StoryObj } from "@storybook/web-components";
import "./Checkbox";
import { html } from "lit";

const meta: Meta = {
  component: "kobber-checkbox",
  tags: ["autodocs"],
  decorators: [(story, storyContext) => html` <div class="${storyContext.globals.theme}">${story()}</div>`],
};

export default meta;
type Story = StoryObj;

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 10px; min-width: 30vw;">
      <fieldset style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
        <legend>Test-checkbox</legend>
        <kobber-checkbox>Unchecked</kobber-checkbox>
        <kobber-checkbox checked>Checked</kobber-checkbox>
        <kobber-checkbox id="cb-indeterminate">Indeterminate</kobber-checkbox>
        <kobber-checkbox indeterminate>Indeterminate</kobber-checkbox>
        <kobber-checkbox disabled>Disabled</kobber-checkbox>
        <kobber-checkbox disabled checked>Checked + Disabled</kobber-checkbox>
        <kobber-checkbox disabled id="cb-indeterminate-2">Indeterminate + Disabled</kobber-checkbox>
      </fieldset>
    </div>
    <script>
      document.getElementById("cb-indeterminate").indeterminate = true;
      document.getElementById("cb-indeterminate-2").indeterminate = true;
    </script>
  `,
};

/**
 * For some reason, page need to be reloaded for controls to come into effect.
 */
export const Checkbox: Story = {
  render: args => {
    return html`
      <kobber-checkbox help-text="Læreren din har skrudd ${args.disabled ? "av" : "på"} denne innstillingen."
        >${args.checked}</kobber-checkbox
      >
      <script>
        const checkbox = document.querySelector("kobber-checkbox");
        checkbox.checked = ${args.checked === "checked"};
        checkbox.indeterminate = ${args.checked === "indeterminate"};
        checkbox.disabled = ${args.disabled};
      </script>
    `;
  },
  argTypes: {
    checked: {
      control: "inline-radio",
      options: ["unchecked", "checked", "indeterminate"],
    },
  },
  args: {
    checked: "checked",
    disabled: false,
  },
};
