import type { Meta, StoryObj } from "@storybook/web-components";
import "./Dialog";
import { html } from "lit";

const meta: Meta = {
  title: "GU/Dialog",
  component: "kobber-dialog",
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Dialog: Story = {
  args: {},
  render: () => html`
    <link rel="stylesheet" href="/themes/light.css" />
    <kobber-dialog label="Dialog">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <button data-close-button>Close</button>
    </kobber-dialog>
    <button data-open-button>Open</button>
    <script>
      const dialog = document.querySelector("kobber-dialog");
      const openButton = document.querySelector("[data-open-button]");
      const closeButton = dialog.querySelector("[data-close-button]");
      openButton.addEventListener("click", () => dialog.show());
      closeButton.addEventListener("click", () => dialog.hide());
    </script>
  `,
};
