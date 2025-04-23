import type { Meta, StoryObj } from "@storybook/web-components";
import { html, unsafeCSS } from "lit";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import { defaultAspectRatio } from "./AspectRatio";
import AspectRatioWiki from "./AspectRatioWiki.mdx";
import { globalStyles } from "../story/globalStyles";

type Args = { aspectRatio: string };

const meta: Meta<Args> = {
  title: "In development 🧪/AspectRatio",
  component: "kobber-aspect-ratio",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: AspectRatioWiki,
    },
  },
  argTypes: {
    aspectRatio: {
      name: "aspect-ratio",
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

const render = (args: Args) => {
  return html`
    <style>
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }

      .container {
        width: 400px;
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${unsafeCSS(tokens.primitives.color.concrete[750])};
        color: white;
      }
    </style>

    <div class="center">
      <div class="container">
        <kobber-aspect-ratio aspect-ratio="${args.aspectRatio}">
          <div class="content">${args.aspectRatio}</div>
        </kobber-aspect-ratio>
      </div>
    </div>
  `;
};

export const AspectRatioStory: Story = {
  render,
  name: "AspectRatio",
  decorators: [story => html`${globalStyles}${story()}`],
  parameters: { layout: "fullscreen" },
  args: { aspectRatio: defaultAspectRatio },
};
