import type { Meta, StoryObj } from "@storybook/web-components";
import "../checkbox/Checkbox";

const meta: Meta = {
  component: "kobber-checkbox",
};

export default meta;
type Story = StoryObj;

export const Checkbox: Story = {
  args: {
    text: "",
  },
  render: () => {
    return `
    <fieldstet style="display: flex; flex-direction: column; gap: 10px;" > 
      <legend>Test-checkbox</legend>
      <kobber-checkbox onclick='handleClick(this);'>Unchecked</kobber-checkbox>
      <kobber-checkbox checked>Checked</kobber-checkbox>
      <kobber-checkbox id="cb-indetarminate" indetarminate>Indeterminate</kobber-checkbox>
      <kobber-checkbox disabled>Disabled</kobber-checkbox>
    </fieldset>
    <script>
      document.getElementById("cb-indetarminate").indeterminate = true;
    </script>
  `;
  },
};
