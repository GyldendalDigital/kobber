import type { Meta, StoryObj } from "@storybook/web-components";
import "./Dialog";
import { html } from "lit";

const meta: Meta = {
  component: "kobber-dialog",
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

export const Dialog: Story = {
  args: {},
  render: () => html`
    <link rel="stylesheet" href="/themes/light.css" />
    <kobber-dialog label="Dialog" class="dialog-overview">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <button data-close>Close</button>
    </kobber-dialog>
    <button>Open</button>
    <script>
      const dialog = document.querySelector(".dialog-overview");
      const openButton = dialog.nextElementSibling;
      const closeButton = dialog.querySelector("[data-close]");

      openButton.addEventListener("click", () => dialog.show());
      closeButton.addEventListener("click", () => dialog.hide());
    </script>
  `,
};
