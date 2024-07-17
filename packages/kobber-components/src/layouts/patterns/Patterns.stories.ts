import { ArgsStoryFn } from "@storybook/types";
import type { Meta, StoryObj } from "@storybook/web-components";
import { WebComponentsRenderer } from "@storybook/web-components";
import { html } from "lit";
import "../box/Box";
import { example as cardLayoutExample } from "../card-layout/story/example";
import "../story/ExampleSurface";
import { globalStyles } from "../story/globalStyles";

interface Args {}

const meta: Meta<Args> = {
  component: "Patterns",
};

export default meta;

const render: ArgsStoryFn<WebComponentsRenderer, Args> = () => {
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

      .demo {
        display: grid;
        width: 100%;
        justify-items: center;
      }
    </style>
    <div class="demo">
      <kobber-box max-width="header">
        <kobber-example-surface>Header</kobber-example-surface>
      </kobber-box>
      <kobber-box max-width="content">Content</kobber-box>
      <div class="space-for-indicators"></div>
      ${cardLayoutExample}
    </div>
  `;
};

export const GridStory: StoryObj<Args> = {
  render,
  name: "Page",
  decorators: [story => html`${globalStyles}${story()}`],
  parameters: { layout: "fullscreen" },
};
