import { ArgsStoryFn } from "@storybook/types";
import type { Meta, StoryObj } from "@storybook/web-components";
import { WebComponentsRenderer } from "@storybook/web-components";
import { html, unsafeCSS } from "lit";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";
import { defaultAspectRatio } from "./AspectRatio";
import AspectRatioWiki from "./AspectRatioWiki.mdx";

const meta: Meta = {
  title: "Utilities 🛠/AspectRatio",
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

type Story = StoryObj;

const render: ArgsStoryFn<WebComponentsRenderer> = args => {
  return html`
    <style>
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        min-width: 320px;
      }

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
  parameters: { layout: "fullscreen" },
  args: { aspectRatio: defaultAspectRatio },
};
